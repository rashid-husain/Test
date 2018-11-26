import { SubCategoryComponent } from './sub-category.component';
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
import { SubCategoryRoute } from './sub-category.routing';

// Services
@NgModule({
  declarations: [
    SubCategoryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    TypeaheadModule,
    AlertModule,
    NgxDatatableModule,
    SubCategoryRoute
  ],
  providers: [],
    bootstrap: [SubCategoryComponent]
})
export class SubCategoryModule { }
