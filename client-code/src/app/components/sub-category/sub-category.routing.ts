import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubCategoryComponent } from './sub-category.component';


const routes: Routes = [
  { path: 'user/sub-category',
    component: SubCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class SubCategoryRoute { }
