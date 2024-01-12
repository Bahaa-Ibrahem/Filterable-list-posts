import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss']
})
export class PostTableComponent {
  @Input() filteredList: IPost[] = [];

}
