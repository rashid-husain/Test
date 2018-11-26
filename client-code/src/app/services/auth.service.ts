import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
   }
   headers: HttpHeaders = new HttpHeaders({
     'Content-Type': 'Application/json'
   });

  userRegister(userData) {
    const token = localStorage.getItem('access_token');
    const url = 'http://localhost:3000/api/Users?' + token;
    return this.http.post(url , userData);
  }

  userLogin(email, password): Promise<any> {
     const url = 'http://localhost:3000/api/Users/login';
     return this.http.post(url, {email, password}, { headers: this.headers}).toPromise().then(this.extractData)
        .catch(this.handleError);
  }
    private extractData(res: Response) {
        return res || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

  getAccount(userId) {
    const token = localStorage.getItem('access_token');
    const url = 'http://localhost:3000/api/Users/' + userId ;
    return this.http.get(url + '?access_token=' + token);
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('userId');
  }

}
