import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../common/productos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getProductos(): Observable<Productos>{
    return this.http.get<Productos>('./assets/data/data.json')
  }

}
