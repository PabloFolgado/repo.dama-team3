import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './componentes/navbar/navbar.component';

import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';



@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD

  imports: [RouterOutlet, NavbarComponent, CatalogoComponent],

 

=======
  imports: [RouterOutlet,CatalogoComponent, HomeComponent, NavbarComponent],
>>>>>>> main
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
