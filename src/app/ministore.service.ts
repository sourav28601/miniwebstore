import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MinistoreService {

  url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  verify_login(data:any):Observable<any>{
    return this.http.post<any>(`${this.url}/login`,data)
  }
  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

}
