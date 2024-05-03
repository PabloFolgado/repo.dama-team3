import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CatalogoComponent, HomeComponent, NavbarComponent, LoginComponent,RegisterComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
