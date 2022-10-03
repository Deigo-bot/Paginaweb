//aca se importan todas las rutas y componentes a utilizar
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { RestauracionComponent } from './pages/restauracion/restauracion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import {CarouselModule} from 'primeng/carousel';
import {MenubarModule} from 'primeng/menubar';
import { PorscheComponent } from './pages/porsche/porsche.component';
import { MustangComponent } from './pages/mustang/mustang.component';
import { BmwComponent } from './pages/bmw/bmw.component';
import { MercedesComponent } from './pages/mercedes/mercedes.component';
import { AcComponent } from './pages/ac/ac.component';
import { ChevroletComponent } from './pages/chevrolet/chevrolet.component';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import {InputTextModule} from 'primeng/inputtext';
//para los formularios
import { ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import { AdminComponent } from './pages/admin/admin.component';

import { UsuariosService } from './servicio/usuarios.service';
import { CarService } from './servicio/car.service';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    VentasComponent,
    RestauracionComponent,
    ContactoComponent,
    PorscheComponent,
    MustangComponent,
    BmwComponent,
    MercedesComponent,
    AcComponent,
    ChevroletComponent,
    AdminComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
    CarouselModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    CardModule,
    DialogModule,
    TableModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [UsuariosService, CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }





