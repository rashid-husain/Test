import { isNullOrUndefined } from 'util';
import { AuthService } from './../../services/auth.service';
import { UserLoginModel } from './../../model/user-login.model';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { PopoverModule, BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  email: String = null;
  password: String = null;
  token = null;
  modalRef: BsModalRef;
  checkLoginCredentials: Boolean;
  // tslint:disable-next-line:max-line-length
  constructor(private authService: AuthService, private router: Router, private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  login(template) {
    this.authService.userLogin(this.email, this.password)
    .then(result => {
        this.token = result.id;
        localStorage.setItem('access_token', this.token);
        localStorage.setItem('userId', result.userId);
        this.openModal(template);
        this.router.navigate(['/user/category']);
        console.log(result)
    }).catch(error => {
      this.checkLoginCredentials = true;
      setTimeout(() => {
        this.checkLoginCredentials = false;
      }, 3000);
      console.log(error);
    });

  }

  register() {
    this.router.navigate(['/user/register']);
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  clickOk() {
    this.modalRef.hide();
  }

}
