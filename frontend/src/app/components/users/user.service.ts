import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUsers, ResponseCreate, RequestUser, ResponseUser } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3333/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url);
  }

  getUser(id: string): Observable<ResponseUser> {
    const _url = `${this.url}/${id}`;
    return this.http.get<ResponseUser>(_url);
  }

  createUser(request: RequestUser): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, request);
  }

  updateUser(id: string, request: RequestUser): Observable<ResponseCreate> {
    const _url = `${this.url}/${id}`;
    return this.http.put<ResponseCreate>(_url, request);
  }
}
