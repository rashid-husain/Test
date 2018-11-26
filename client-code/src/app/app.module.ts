import { RegisterModule } from './components/register/register.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginModule } from './components/login/login.module';
import { CategoryModule } from './components/category/category.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AlertModule, TypeaheadModule } from 'ngx-bootstrap';
import { DataApiService } from './services/data-api.service';
import { AuthService } from './services/auth.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SubCategoryModule } from './components/sub-category/sub-category.module';
import { AppRoutingModule } from './app-routing.module';
// Services


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    RegisterModule,
    LoginModule,
    CategoryModule,
    SubCategoryModule,
    TypeaheadModule
  ],
  providers: [DataApiService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
