import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'Application/json'
  });

  // category api calling from here
  createCategory(category) {
    const token = localStorage.getItem('access_token');
    const url = 'http://localhost:3000/api/Categories?access_token=' + token;
    return this.http.post(url, category);
  }

  getAllCategory() {
    const token = localStorage.getItem('access_token');
    const url = 'http://localhost:3000/api/Categories?access_token=';
    return this.http.get(url + token);
  }

  deleteCategory(id) {
    const token = localStorage.getItem('access_token');
    const url = 'http://localhost:3000/api/Categories/' + id + '?access_token=';
    return this.http.delete(url + token);
  }

  updateCategory(category) {
    const token = localStorage.getItem('access_token');
    const url = 'http://localhost:3000/api/Categories/' + category.id + '?access_token=' + token;
    return this.http.put(url , category);
  }

  // Category api calling end here

  // Sub Category api calling from here
  createSubCategory(subCategory) {
    const token = localStorage.getItem('access_token');
    const url = 'http://localhost:3000/api/Sub-categories?access_token=' + token;
    return this.http.post(url, subCategory);
  }

  getAllSubCategory() {
    const token = localStorage.getItem('access_token');
    const url = 'http://localhost:3000/api/Sub-categories?access_token=';
    return this.http.get(url + token);
  }

  deleteSubCategory(id) {
    const token = localStorage.getItem('access_token');
    const url = 'http://localhost:3000/api/Sub-categories/' + id + '?access_token=';
    return this.http.delete(url + token);
  }

  updateSubCategory(subCategory) {
    const token = localStorage.getItem('access_token');
    const url = 'http://localhost:3000/api/Sub-categories/' + subCategory.id + '?access_token=' + token;
    return this.http.put(url , subCategory);
  }

  getParentCategory(id) {
    const token = localStorage.getItem('access_token');
    const url = 'http://localhost:3000/api/Categories/' + id + '?access_token=';
    return this.http.get(url + token);
  }

}
