import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { NavbarComponent } from './componentes/navbar/navbar.component';
=======
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
>>>>>>> main

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, NavbarComponent],
=======
  imports: [RouterOutlet,CatalogoComponent],
>>>>>>> main
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
