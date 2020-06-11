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
    return this.http.get('https://api.github.com/users/'+ data+"?client_id=69d6f012d5d041a1276b &client_secret=0f8048ad7c720439ec49de8ad337c730dfbfef9d");
  }

  getgithubuserRepoData(data):Observable<any>
  {
    return this.http.get('https://api.github.com/users/'+ data + '/repos?client_id=69d6f012d5d041a1276b & client_secret=0f8048ad7c720439ec49de8ad337c730dfbfef9d');
  }

  getgithubuserfollowerData(data):Observable<any>
  {
    return this.http.get('https://api.github.com/users/'+ data + '/followers?client_id=69d6f012d5d041a1276b & client_secret=0f8048ad7c720439ec49de8ad337c730dfbfef9d');
  }
}
