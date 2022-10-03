import { NgModule } from '@angular/core';
//es el modulo de angular
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RestauracionComponent } from './pages/restauracion/restauracion.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { PorscheComponent } from './pages/porsche/porsche.component';
import { MustangComponent } from './pages/mustang/mustang.component';
import { BmwComponent } from './pages/bmw/bmw.component';
import { MercedesComponent } from './pages/mercedes/mercedes.component';
import { AcComponent } from './pages/ac/ac.component';
import { ChevroletComponent } from './pages/chevrolet/chevrolet.component';
import { AdminComponent } from './pages/admin/admin.component';


const routes: Routes = [
  //en el path se especifican las rutas que vamos a utilizar.
  { path:"inicio", component:InicioComponent},
  { path:"restauracion", component:RestauracionComponent},
  { path:"ventas", component:VentasComponent},
  { path:"contacto", component:ContactoComponent},
  { path:"porsche", component:PorscheComponent},
  { path:"mustang", component:MustangComponent},
  { path:"bmw", component:BmwComponent},
  { path:"mercedes", component:MercedesComponent},
  { path:"ac", component:AcComponent},
  { path:"chevrolet", component:ChevroletComponent},
  { path:"admin", component:AdminComponent},
];
export const AppRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
