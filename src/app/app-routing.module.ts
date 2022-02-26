import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { MainComponent } from './pages/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbolComponent } from './pages/arbol/arbol.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectComponent } from './proyect/proyect.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NewproyectComponent } from './pages/newproyect/newproyect.component';
import { DatosgeneralesComponent } from './pages/datosgenerales/datosgenerales.component';


const routes: Routes = [

  {
    path: 'main',
    component: MainComponent
  },

  {
    path: 'arbol',
    component: ArbolComponent
  },

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'proyecto',
    component: ProyectComponent
  },


  {
    path: 'menu',
    component: MenuComponent
  },

  {
    path: 'new',
    component: NewproyectComponent
  },

  {
    path: 'generales',
    component: DatosgeneralesComponent
  },

  {
    path: 'catalogo',
    component: CatalogoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
