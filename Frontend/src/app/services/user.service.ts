import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { User } from '../models/user.model'; // Adjust the import as needed
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  role: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/auth'; // Your backend API URL

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl+'/users');
  }

  // signup(user: User): Observable<User> {
  //   return this.http.post<User>(this.apiUrl, +'/signup');
  // }
  // User signup method
  signup(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, user);
  }

  login(user:User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user);
  }

  // Add other methods as needed (updateUser, deleteUser, etc.)
}
