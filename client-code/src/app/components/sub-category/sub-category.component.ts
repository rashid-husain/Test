import { SubCategoryModel } from './../../model/sub-category.model';
import { DataApiService } from './../../services/data-api.service';
import { CreateCategoryModel } from './../../model/create-category.model';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.sass']
})
export class SubCategoryComponent implements OnInit {

  showErrorMessage: Boolean = false;
  @ViewChild('actionTemaplate') actionTemplate: TemplateRef<any>;
  modalRef: BsModalRef;
  selectedSubCategory: String;
  createSubCategory = new SubCategoryModel();
  subCategories = [];
  categories = [];
  userName: String;
  deleteId: any;
  showAlert: Boolean;
  showCreatedAlert: Boolean;
  showGrid: Boolean;
  showUpdateAlert: Boolean;
  updateSubCategory: any;
  parentType: String;
  // tslint:disable-next-line:max-line-length
  constructor(private authService: AuthService, private modalService: BsModalService, private router: Router, private dataApiService: DataApiService) {

  }

  ngOnInit() {
    this.getAllCategory();
    this.getAllSubCategory();
    this.account();
  }

  account() {
    let userId = null;
    userId = localStorage.getItem('userId');
    if (userId) {
      this.authService.getAccount(userId).subscribe((response: any) => {
        this.userName = response.username;
      });
    }
  }

  createSubCategories() {
    this.createSubCategory.parentType = this.parentType;
    let checkSubCategoryPresent;
    this.subCategories.forEach(subCategory => {
      if (subCategory.name === this.createSubCategory.name && subCategory.parentType === this.createSubCategory.parentType) {
        checkSubCategoryPresent = true;
      }
    });
    if (!checkSubCategoryPresent) {
      this.dataApiService.createSubCategory(this.createSubCategory).subscribe(response => {
        this.showCreatedAlert = true;
        this.showGrid = false;
        this.createSubCategory = null;
        this.selectedSubCategory = null;
        this.getAllSubCategory();
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

  getAllSubCategory() {
    this.dataApiService.getAllSubCategory().subscribe((response: any) => {
      this.subCategories = response;
    });
  }

  getAllCategory() {
    this.dataApiService.getAllCategory().subscribe((response: any) => {
      this.categories = response;
    });
  }

  deleteSubCategory() {
    this.dataApiService.deleteSubCategory(this.deleteId).subscribe(response => {
      this.getAllSubCategory();
      this.modalRef.hide();
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
    });
  }

  setDeleteSubCategory(row, template) {
    this.deleteId = row.id;
    this.openModel(template);
  }

  openModel(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  setUpdateSubCategory(category, updateTemplate) {
    this.updateSubCategory = category;
    this.modalRef = this.modalService.show(updateTemplate);
  }

  editSubCategory() {
    this.dataApiService.updateSubCategory(this.updateSubCategory).subscribe(response => {
      this.showUpdateAlert = true;
      this.modalRef.hide();
      setTimeout(() => {
        this.showUpdateAlert = false;
      }, 3000);
    });
  }

  selectOnCategory(event) {
    this.createSubCategory.categoryId = event.item.id;
    this.getParentCategory(event.item.id);
  }

  getParentCategory(id) {
    this.dataApiService.getParentCategory(id).subscribe((response: any) => {
      this.parentType = response.name;
    });
  }
}
