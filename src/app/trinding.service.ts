import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrindingService {

  constructor(private _http: HttpClient) { }

  getTrinding(mediaType:any):Observable<any>
  {
    return this._http.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=9813ce01a72ca1bd2ae25f091898b1c7`)
  }
}
