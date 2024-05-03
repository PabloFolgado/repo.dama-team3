import { Routes } from '@angular/router';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', title:'Home', component: HomeComponent},
    {path:'catalogo', title:'Catalogo', component: CatalogoComponent},
    {path:'login', title:'Login', component: LoginComponent},
    {path:'register', title:'Register', component: RegisterComponent}
    
];
