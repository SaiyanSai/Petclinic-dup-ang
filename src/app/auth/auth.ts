import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:9966/petclinic';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {

  const authHeader = 'Basic ' + btoa(`${username}:${password}`);

  const headers = new HttpHeaders({
    'Authorization': authHeader,
    'Content-Type': 'application/json'
  });

    return this.http.get(`${this.apiUrl}`,{headers});
  }

  

  signup(username: string, password: string, authUsername: string, authPassword: string): Observable<any> {


  const authHeader = 'Basic ' + btoa(`${authUsername}:${authPassword}`);

  const headers = new HttpHeaders({
    'Authorization': authHeader,
    'Content-Type': 'application/json'
  });

    return this.http.post(`${this.apiUrl}/api/users`,  {
      "username": username,
      "password": password,
      "enabled": true,
      "roles": [
      {
        "name": "admin"
      }
  ]
    },{headers});
  }


}

