import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Usuarios } from 'src/app/model/usuarios';
import { MenuItem } from 'primeng/api';
import { UsuariosService } from 'src/app/servicio/usuarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  Usuarios = new FormGroup({
    nombreusuario: new FormControl ('', Validators.required),
    contrasena: new FormControl ('', Validators.required)
  })
  

  // Declaraciones
  items: MenuItem[] = [];

  adminVisible = false;
  coleccionUsuario: Usuarios[] = [];

  //modalvisible es para mostrar el form
  modalVisible : boolean = false;
  showModalDialog() {
    this.modalVisible = true;
  }

 
  //MOSTRAMOS EL VERIFICAR USUARIO
  mostrar(){
    this.verificarUsuario();
  }

  verificarUsuario(){
    this.coleccionUsuario.forEach(usuario => {
      if(this.Usuarios.valid){
        if(usuario.nombreusuario===this.Usuarios.value.nombreusuario!){
          if(usuario.contrasena===this.Usuarios.value.contrasena!){
            alert ("Inicio sesión correctamente")
            this.adminVisible=true;
            this.ngOnInit()
          }else{
            alert ("La contraseña es incorrecta")
          }
        }
        else{
          alert ("algunos de los datos son incorrectos")
        }
      }else{
        alert("los campos están vacios")
      }
      this.modalVisible=false;
      this.Usuarios.reset();
    });
  }
  ngOnInit(): void {
    this.items=[
      {
        label:"Inicio",
        icon:"pi pi-home",
        routerLink:"/inicio"
      },
      {
        label:"Autos en venta",
        icon:"pi pi-car",
        routerLink:"/ventas"
      },
      {
        label:"Restauracion",
        icon:"pi pi-cog",
        routerLink:"/restauracion"
      },
      {
        label:"Contacto",
        icon:"pi pi-users",
        routerLink:"/contacto"
      },
      {
        label: 'Admin',
        icon: 'pi pi-user-plus',
        routerLink: '/admin',
        visible: this.adminVisible,
      },
    ]
    this.serviciosUsuarios.obtenerUsuarios().subscribe(usuarios=>this.coleccionUsuario=usuarios)
  }


  constructor( private serviciosUsuarios: UsuariosService,) { }

 
 
}


