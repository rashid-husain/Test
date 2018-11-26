import { DataApiService } from './../../services/data-api.service';
import { CreateCategoryModel } from './../../model/create-category.model';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {

  showErrorMessage: boolean;
  @ViewChild('actionTemaplate') actionTemplate: TemplateRef<any>;
  modalRef: BsModalRef;
  createCategory = new CreateCategoryModel();
  categories = [];
  userId: any;
  userName: String;
  columns = [];
  deleteId: any;
  showAlert: Boolean;
  showCreatedAlert: Boolean;
  showCreateCategoryField: Boolean;
  showUpdateAlert: Boolean;
  updateCategory = new CreateCategoryModel();

  // tslint:disable-next-line:max-line-length
  constructor(private authService: AuthService, private modalService: BsModalService , private router: Router, private dataApiService: DataApiService) {

  }

  ngOnInit() {
    this.getAllCategory();
    this.account();
  }

  account() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.authService.getAccount(userId).subscribe((response: any) => {
      this.userName = response.username;
      });
    }
  }

  createCategories() {
   let checkPresent;
   this.categories.forEach(category => {
     if (category.name === this.createCategory.name) {
       checkPresent = true;
     }
   });
   if (!checkPresent) {
        this.dataApiService.createCategory(this.createCategory).subscribe(response => {
        this.showCreatedAlert = true;
        this.showCreateCategoryField = false;
        this.createCategory = null;
        this.getAllCategory();
        setTimeout(() => {
          this.showCreatedAlert = false;
        }, 3000);
      });
    } else {
      this.showErrorMessage = true;
      setTimeout(() => {
       this.showErrorMessage = false;
      }, 3000);
    }
  }

  getAllCategory() {
    this.dataApiService.getAllCategory().subscribe((response: any) => {
      this.categories = response;
    });
  }

  deleteCategory() {
      this.dataApiService.deleteCategory(this.deleteId).subscribe(response => {
        this.getAllCategory();
        this.modalRef.hide();
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      });
  }

  setDeleteCategory(row, template) {
     this.deleteId = row.id;
    this.openModel(template);
  }

  openModel(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
  }

  setUpdateCategory(category, updateTemplate) {
    this.updateCategory = category;
    this.modalRef = this.modalService.show(updateTemplate);
  }

  editCategory() {
    this.dataApiService.updateCategory(this.updateCategory).subscribe(response => {
      this.showUpdateAlert = true;
      this.modalRef.hide();
      setTimeout(() => {
      this.showUpdateAlert = false;
      }, 3000);
    });
  }
}
