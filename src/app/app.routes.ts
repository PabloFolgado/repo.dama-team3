import { Routes } from '@angular/router';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { HomeComponent } from './componentes/home/home.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', title:'Home', component: HomeComponent},
    {path:'catalogo', title:'Catalogo', component: CatalogoComponent}
];
