
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login.component';
import { LoginRoute } from './login.route';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-bootstrap';

// Services
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    PopoverModule.forRoot(),
    BrowserModule,
    FormsModule,
    CommonModule,
    AlertModule,
    LoginRoute
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
