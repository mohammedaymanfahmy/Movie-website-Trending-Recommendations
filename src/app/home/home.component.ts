import { Component, OnInit } from '@angular/core';
import { TrindingService } from '../trinding.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _Trending:TrindingService) { }

  trendingMoves:any[] = [];
  trendingTvshows:any[] = [];

  getTrendingItems()
  {
    this._Trending.getTrinding("all").subscribe((res) =>
    {
      this.trendingMoves = res.results.filter((item: any) =>
      {
        return item.media_type=='movie'
      })

      this.trendingTvshows = res.results.filter((item: any) =>
      {
        return item.media_type=='tv'
      })
    })
  }
  ngOnInit(): void
  {
    this.getTrendingItems()
  }

}
