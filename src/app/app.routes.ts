
import { Routes, } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ContactComponent } from './componentes/contact/contact.component';

export const routes: Routes = [
    {path:'home', title:'Home', component:HomeComponent},
    {path:'login', title:'Login', component:LoginComponent},
    {path:'contact', title:'Contact', component:ContactComponent},

];
