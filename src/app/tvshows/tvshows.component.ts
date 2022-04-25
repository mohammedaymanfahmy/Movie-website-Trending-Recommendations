import { Component, OnInit } from '@angular/core';
import { TrindingService } from '../trinding.service';
@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  constructor(private _Trending:TrindingService) { }

  trendingTvshows: any[] = []
  getTrendingTvshows()
  {
    return this._Trending.getTrinding("tv").subscribe((res) => {
      this.trendingTvshows = res.results
    })
  }
  ngOnInit(): void
  {
    this.getTrendingTvshows()
  }

}
