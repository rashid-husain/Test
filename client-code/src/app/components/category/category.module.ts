
import { CategoryComponent } from './category.component';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { TypeaheadModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { CategoryRoute } from './category.route';

// Services
@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    TypeaheadModule,
    AlertModule,
    NgxDatatableModule,
    CategoryRoute
  ],
  providers: [],
  bootstrap: [CategoryComponent]
})
export class CategoryModule { }
