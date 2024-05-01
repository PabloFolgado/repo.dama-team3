import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './componentes/navbar/navbar.component';

import { CatalogoComponent } from './componentes/catalogo/catalogo.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, NavbarComponent, CatalogoComponent],

 

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
