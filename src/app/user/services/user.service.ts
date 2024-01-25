import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class userService {
  backendUrl: string = "https://reqres.in/api/users";
  constructor(private http: HttpClient) { }
  fetchUsers(page: number = 1) {
    return this.http.get(`${this.backendUrl}?page=${page}`).pipe(
      map((res) => {
        return res;
      }));
  }
  fetchOneUser(userId: string) {
    return this.http.get(`${this.backendUrl}/${userId}`).pipe(
      map((res) => {
        return res;
      }));
  }
}
