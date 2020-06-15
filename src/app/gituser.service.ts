import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GituserService {
  
  constructor(private http:HttpClient) { }

  getgithubuserData(data):Observable<any>
  {
    return this.http.get('https://api.github.com/users/'+ data);
  }

  getgithubuserRepoData(data):Observable<any>
  {
    return this.http.get('https://api.github.com/users/'+ data + '/repos');
  }

  getgithubuserfollowerData(data):Observable<any>
  {
    return this.http.get('https://api.github.com/users/'+ data + '/followers');
  }
}
