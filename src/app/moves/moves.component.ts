import { Component, OnInit } from '@angular/core';
import { TrindingService } from '../trinding.service';


@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss']
})
export class MovesComponent implements OnInit {

  trendingMoves: any[] = [];
  constructor(private _Trending: TrindingService) { }
  getMoves()
  {
    return this._Trending.getTrinding("movie").subscribe((res) =>
    {
      this.trendingMoves = res.results
      console.log(this.trendingMoves)
    }
    )


  }
  ngOnInit(): void
  {
    this.getMoves()
  }

}
