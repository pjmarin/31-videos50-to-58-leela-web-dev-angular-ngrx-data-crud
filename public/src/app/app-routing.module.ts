import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { PostsResolver } from './posts/posts.resolver';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'posts', 
    component: PostListComponent,
    resolve: { posts: PostsResolver } 
  },
  { path: 'posts/add', component: AddPostComponent },
  { 
    path: 'posts/edit/:id', 
    component: EditPostComponent,
    resolve: { posts: PostsResolver } 
  },
  { 
    path: 'posts/details/:id', 
    component: SinglePostComponent,
    resolve: { posts: PostsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
