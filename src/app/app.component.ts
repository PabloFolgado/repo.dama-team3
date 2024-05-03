import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
<<<<<<< HEAD
import { FooterComponent } from './componentes/footer/footer.component';
=======
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
>>>>>>> main


@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet,CatalogoComponent, HomeComponent, NavbarComponent, FooterComponent],
=======
  imports: [RouterOutlet, RouterLink,CatalogoComponent, HomeComponent, NavbarComponent, LoginComponent],
>>>>>>> main
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
