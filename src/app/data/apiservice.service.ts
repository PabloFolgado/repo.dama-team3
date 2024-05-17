import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DisneyApi } from '../common/disney-api';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  private urlApi = 'https://api.disneyapi.dev/character'
  private urlApiBase = ' '

  


  constructor(private http: HttpClient) { }

  public GetPersonajes(): Observable<DisneyApi>{
    return this.http.get<DisneyApi>(this.urlApi)
  }
}
