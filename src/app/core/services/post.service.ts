import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IComment, IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(environment.baseUrl + 'posts');
  }

  getPostDetails(id: string | null): Observable<IPost> {
    return this.httpClient.get<IPost>(environment.baseUrl + 'posts/' + id);
  }

  getPostComments(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(environment.baseUrl + 'comments');
  }
}
