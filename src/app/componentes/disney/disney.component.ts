import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../../data/apiservice.service';
import { DisneyApi } from '../../common/disney-api';

@Component({
  selector: 'app-disney',
  standalone: true,
  imports: [],
  templateUrl: './disney.component.html',
  styleUrl: './disney.component.css'
})
export class DisneyComponent implements OnInit {

bdataPersonajes! : DisneyApi
constructor(private apiservice: APIServiceService){}
ngOnInit(): void {
  this.loadPersonaje();
}
loadPersonaje(){
  this.apiservice.GetPersonajes().subscribe(
    {
      next: (data) =>{
        this.bdataPersonajes = data 
        console.log(data)
      },
      error: err =>{
        console.log(err)
      },
      complete: () =>{
        console.log('completed')
      }
    }
  )
}
}
