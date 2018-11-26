import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

export const headerRoutes: Routes = [
  {
    path: 'header',
    component: HeaderComponent,
    outlet: 'header'
  }
];
