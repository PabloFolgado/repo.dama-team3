import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ProductosComponent } from './componentes/productos/productos.component';


@Component({
  selector: 'app-root',
  standalone: true,


  imports: [RouterOutlet, RouterLink, NavbarComponent,FooterComponent,HeaderComponent,ProductosComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
