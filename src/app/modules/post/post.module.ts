import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { PostTableComponent } from './components/post-table/post-table.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    PostListComponent,
    PostTableComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    TranslateModule
  ]
})
export class PostModule { }
