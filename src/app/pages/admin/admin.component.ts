import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/servicio/car.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/model/car';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Car = new FormGroup({
    Nombre: new FormControl('',Validators.required),
    Modelo: new FormControl('',Validators.required),
    Precio: new FormControl('',Validators.required),
    Imagen: new FormControl('',Validators.required),
    Marca: new FormControl('',Validators.required),
    Avatar: new FormControl('',Validators.required),
    Url: new FormControl('',Validators.required),
    
    
  })
  modalVisible:boolean=false;
  coleccionDeCars:Car[]=[];
  imagen:string;
  
  carSeleccionado: Car;
  
  eliminarVisible: boolean = false;

  
  adminVisible=false;
  constructor(private servicioCars:CarService){

  }
  
  
  agregarCar(){
    if(this.Car.valid){
      let nuevoCar:Car = {
        Nombre: this.Car.value.Nombre!,
        Modelo: this.Car.value.Modelo!,
        Precio: this.Car.value.Precio!,
        Imagen: this.Car.value.Imagen!,
        Marca: this.Car.value.Marca!,
        Avatar: this.Car.value.Avatar!,
        Url: this.Car.value.Url!,
        idCar: "" 
      }
      this.servicioCars.crearCar(nuevoCar).then((Car)=>{
        alert("El auto fue agregado con exito")
      })
      .catch((error)=>{
        alert("El auto no pudo ser cargado\nError:"+error)
      })
    }
    else{
      alert("El formulario no esta completo")
    }
    

    
   

    
  }
  mostrarDialogo(){
    this.textoBoton = "Agregar auto"
    this.modalVisible = true;

  }

  editarCar(){
    let datos:Car = {
      Nombre: this.Car.value.Nombre!,
      Modelo: this.Car.value.Modelo!,
      Precio: this.Car.value.Precio!,
      Imagen: this.Car.value.Imagen!,
      Marca: this.Car.value.Marca!,
      Avatar: this.Car.value.Avatar!,
      Url: this.Car.value.Url,
      idCar: this.carSeleccionado.idCar
    }
    this.servicioCars.modificarCar(this.carSeleccionado.idCar,datos).then((Car)=>{
      alert("El auto fue modificado con exito");
    })
    
  }
  mostrarEditar(carSeleccionado:Car){
    this.carSeleccionado = carSeleccionado
    this.textoBoton = "Editar auto"
    this.modalVisible=true;
    this.Car.setValue({
      Nombre: carSeleccionado.Nombre,
      Modelo: carSeleccionado.Modelo,
      Precio: carSeleccionado.Precio,
      Imagen: carSeleccionado.Imagen,
      Marca: carSeleccionado.Marca,
      Avatar: carSeleccionado.Avatar,
      Url: carSeleccionado.Url
    })
  }
  textoBoton:string;
  
  cargarDatos(){
    if(this.textoBoton=="Agregar auto"){
      this.agregarCar()
    }
    else if(this.textoBoton == "Editar auto"){
      this.editarCar()
    }
    this.modalVisible=false;
    this.Car.reset();

  }
  
  mostrarEliminar(carSeleccionado:Car){
    this.eliminarVisible = true
    this.carSeleccionado = carSeleccionado
  }
  borrarCar(){
    this.servicioCars.eliminarCar(this.carSeleccionado.idCar).then((resp)=>{
      alert("El auto fue eliminado con exito")
    })
    
    this.eliminarVisible = false
  }

  cargarImagen(event:any){
    let archivo = event.target.files[0]; 
    
    //nos lee lo nuevo
    let reader = new FileReader()
    if (archivo!= undefined){
      reader.readAsDataURL(archivo)
      //que se quiere que se haga con lo que se lee
      reader.onloadend = () => {
        let url = reader.result;
        if(url!=null){
          
          this.imagen =url.toString();
        }
      }
    }
  }
   ngOnInit(): void {
    this.servicioCars.obtenerCars().subscribe(car=>{
      this.coleccionDeCars=car
      this.coleccionDeCars.forEach(ele=>{
        ele.Avatar = ele.Avatar.replace("background-image: url('","")
        ele.Avatar = ele.Avatar.replace("');background-size: cover","")
      })
      console.log(this.coleccionDeCars)
    })
    
   }
  

  

}
