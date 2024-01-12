import { Component, OnInit, inject } from '@angular/core';
import { IPost } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  private postService = inject(PostService);

  postsList: IPost[] = [];
  filteredList: IPost[] = [];
  searchKey!: string

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    this.postService.getAllPosts().subscribe((res: IPost[]) => {
      this.postsList = [...res];
      this.filteredList = [...this.postsList];
    })
  }

  onSearch() {
    this.filteredList = this.postsList.filter((res: IPost) =>
      res.body.toLowerCase().match(this.searchKey?.toLowerCase()) ||
      res.title.toLowerCase().match(this.searchKey?.toLowerCase())
    )
  }
}
