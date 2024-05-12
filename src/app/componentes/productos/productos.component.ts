import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Productos } from '../../common/productos';
import { ServiceService } from '../../data/service.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit{
  
  productos!: Productos;
  constructor(private dataservice: ServiceService){}

  ngOnInit(): void {
    this.loadProductos();
  }
  loadProductos(){
    this.dataservice.getProductos().subscribe(
      {
        next: (data) =>{
          console.log(data)
          this.productos = data;
        },
        error: err =>{
          console.log(err)
        },
        complete: () =>{
          console.log('Task complete')
        }
        
      }
    )
  }
}
