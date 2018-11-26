import { CategoryComponent } from './components/category/category.component';
import { headerRoutes } from './common/header/header.route';
import { HeaderComponent } from './common/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';

const appRoutes: Routes = [
  { path: 'category',
    component: CategoryComponent
  },
  {
    path: 'sub-category',
    component: SubCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
