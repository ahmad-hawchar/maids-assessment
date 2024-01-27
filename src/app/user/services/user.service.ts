import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'any'
})
export class userService {
  backendUrl: string = "https://reqres.in/api/users";
  private cache = new Map<number, User>();
  constructor(private http: HttpClient) { }

  fetchUsers(page: number = 1) {
    return this.http.get(`${this.backendUrl}?page=${page}`).pipe(
      map((res) => {
        return res;
      }));
  }
  fetchOneUser(userId: number) {
    //if the user we are searching for is found in the cache map, we send the data of the user as an observable by using of
    //without making a new request.if not we make a request and then cache the data and return it
    if (this.cache.has(userId)) {
      return of(this.cache.get(userId));
    }
    return this.http.get(`${this.backendUrl}/${userId}`).pipe(
      map((res: any) => {
        if (res) this.cache.set(userId, res);
        return res;
      }));
  }
}
