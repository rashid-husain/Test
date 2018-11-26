import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RegisterComponent } from './register.component';
import { AlertModule } from 'ngx-bootstrap';
import { RegisterRoute } from './register.route';
import { CommonModule } from '@angular/common';

// Services
@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AlertModule,
    RegisterRoute
  ],
  providers: [],
  bootstrap: [RegisterComponent]
})
export class RegisterModule { }
