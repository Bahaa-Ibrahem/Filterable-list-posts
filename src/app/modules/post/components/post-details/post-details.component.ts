import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment, IPost } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  private postService = inject(PostService);
  private route = inject(ActivatedRoute);

  id: string | null;
  post!: IPost;
  comments: IComment[] = [];

  constructor() {
   this.id = this.route.snapshot.paramMap.get('id');
   this.getPostDetails();
  }

  ngOnInit(): void { }

  getPostDetails() {
    this.postService.getPostDetails(this.id).subscribe((res: IPost) => {
      this.post = res;
      this.getPostComments();
    })
  }

  getPostComments() {
    this.postService.getPostComments().subscribe((res: IComment[]) => {
      this.comments = res.filter((comment: IComment) => comment.postId === this.post.id);
    })
  }
}
