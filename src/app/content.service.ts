import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBlog} from './i-blog';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private readonly API_URL = 'http://localhost:8080/rest/blogs';
  constructor(private http: HttpClient) { }

  getById(id: number): Observable<IBlog> {
    return this.http.get<IBlog>(`${this.API_URL}/${id}`);
  }
  getContents(): Observable<IBlog[]> {
    return this.http.get<IBlog[]>(`${this.API_URL}`);
  }

  deleteContent(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);

  }

  createPost(post: Partial<IBlog>): Observable<IBlog> {
    return this.http.post<IBlog>(`${this.API_URL}/add`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  updatePost(post: IBlog): Observable<IBlog> {
    console.log('ok');
    return this.http.put<IBlog>(`${this.API_URL}/${post.id}`, post);

  }
}
