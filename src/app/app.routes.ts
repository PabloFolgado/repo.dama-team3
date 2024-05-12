import { Routes } from '@angular/router';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', title:'Home', component: HomeComponent},
    {path:'catalogo', title:'Catalogo', component: CatalogoComponent},
    {path:'login', title:'Login', component: LoginComponent},
    {path:'register', title:'Register', component: RegisterComponent},
    {path:'productos', title:'Productos', component: ProductosComponent},
    {path:'pago', title:'Pago', component: PagoComponent},
    {path:'contact', title:'Contacto', component: ContactComponent},
    {path:'**', component: PageNotFoundComponent}
];
