import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewFeeds (): Observable<any> {
    return this.http.get('http://localhost:4207/assets/data/post.json').pipe(map((res: any)=> res));
  }

  handleError (err) {
   console.error(err)
  }

  
}
