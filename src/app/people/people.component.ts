import { Component, OnInit } from '@angular/core';
import { TrindingService } from '../trinding.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {



  people:any[] = []
  constructor(private _Trending:TrindingService) { }

  getPeople()
  {
    return this._Trending.getTrinding("people").subscribe((res) =>
    {
      this.people = res.results;
      // this.people = this.people.filter((e:any)=>{e.hasp})
    })
  }


  ngOnInit(): void
  {
      this.getPeople()

  }

}
