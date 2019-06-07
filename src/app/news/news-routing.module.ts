



import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [{
  path: '',
  component: NewsFeedComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
