import { CategoryComponent } from './category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../common/header/header.component';

const routes: Routes = [
  { path: 'user/category',
    component: CategoryComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class CategoryRoute { }
