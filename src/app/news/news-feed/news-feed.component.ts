import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  isopencomment = false;
  newsFeeds: any[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getFeeds();
  }

  openComment () {
    this.isopencomment = !this.isopencomment
  }

  getFeeds () {
    this.newsService.getNewFeeds().subscribe(res=> {
      console.log(res, "responce of feeds");
      this.newsFeeds = res;
    })
  }

}
