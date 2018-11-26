import { AuthService } from './../../services/auth.service';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserRegisterModel } from '../../model/user-register.model';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  userRegisterModel = new UserRegisterModel();
  modalRef: BsModalRef;
  showAlert: Boolean;
  constructor(private authService: AuthService, private router: Router, private modalService: BsModalService) {
  }
  ngOnInit() {
  }

  registerUser() {
    this.authService.userRegister(this.userRegisterModel).subscribe( response => {
      this.showAlert = true;
      setTimeout(() => {
        this.router.navigate(['']);
      }, 3000);
    });
  }

  goBack() {
    this.router.navigate(['']);
  }

}
