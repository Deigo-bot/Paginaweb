import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/servicio/car.service';
import { Car } from 'src/app/model/car';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  coleccionDeCars:Car[]
 
  constructor(private servicioCars:CarService){

  }
   ngOnInit(): void {
    this.servicioCars.obtenerCars().subscribe(car=>this.coleccionDeCars=car)
   }
}





  


  // public info: AnimalDescription[];
  // public user:boolean = false;

  // constructor() {
  //   this.info = [
  //     {
  //       nombre: "Porsche 911 E Targa",
  //       caracteristicas: 'date_range',
  //       modelo:'MODELO 1971',
  //       precio: 'U$S 230.000',
  //       imagen:'https://www.macomeclassic.com.ar/storage/images/vehiculos/Ef1nHbrycsARCzeQstI7xbLcVhRdr3A3whemazj4.jpg',
  //       marca:'Porsche',
  //       avatar:"background-image: url('https://www.macomeclassic.com.ar/storage/images/vehiculos/rbnqsmPFAQT8SizsCsZvPCkzRFMT6ZMQk2UWd4Pd.png');background-size: cover",
  //       url:"/porsche",
 
  //     },
  //     {
  //       nombre:'Ford Mustang Mach 1',
  //       caracteristicas:'date_range',
  //       modelo: 'MODELO 2022',
  //       precio: 'U$S 109.000',
  //       imagen:'https://www.macomeclassic.com.ar/storage/images/vehiculos/K5ltVZxXkj2eg6tf7mzpVLZH7v52p8mti7GfNznv.jpg',
  //       marca:'Ford',
  //       avatar:"background-image: url('https://www.macomeclassic.com.ar/storage/images/vehiculos/DH9plg48RsU4mLFrfTNphm8aziE4Gizz5nYUMsCX.png');background-size: cover",
  //       url:"/mustang",
  //     },
  //     {
  //       nombre:'BMW 635 CSI',
  //       caracteristicas:'date_range',
  //       modelo: 'MODELO 1980',
  //       precio: 'U$S 35.000',
  //       imagen:'https://www.macomeclassic.com.ar/storage/images/vehiculos/ezvN5cYyYAYLOdCnq0aYVJn0P61aklZOQE7X31Cn.jpg',
  //       marca:'BMW',
  //       avatar:"background-image: url('https://www.macomeclassic.com.ar/storage/images/vehiculos/9QsAJs4H3HTeLnd8iotYUP4ycJxcr1zFOQfYhGeY.png');background-size: cover",
  //       url:"/bmw",
  //     },
  //     {
  //       nombre:'Mercedes Benz 280SL',
  //       caracteristicas:'date_range',
  //       modelo: 'MODELO 1980',
  //       precio: 'U$S 80.000',
  //       imagen:'https://www.macomeclassic.com.ar/storage/images/vehiculos/wUS2cSbFZhOPGqI4bF4pCpfCY1w3eGULLniMFk0m.jpg',
  //       marca:'Mercedes Benz',
  //       avatar:"background-image: url('https://www.macomeclassic.com.ar/storage/images/vehiculos/1Jky22pSU0qmDLnDoBNnMXoLJvhjm5LDfSloonsn.png');background-size: cover",
  //       url:"/mercedes",
  //     },
  //     {
  //       nombre:'AC Cobra',
  //       caracteristicas:'date_range',
  //       modelo: 'MODELO 2002',
  //       precio: 'U$S 80.000',
  //       imagen:'https://www.macomeclassic.com.ar/storage/images/vehiculos/Z7UW085WyDnODwPi4da5R7Sbj2pgIhbo6QIW4wc0.jpg',
  //       marca:'AC',
  //       avatar:"background-image: url('https://www.macomeclassic.com.ar/storage/images/vehiculos/yarPohzqw6nUzSVlTpXW6tlCXdRohF8dRA6e454z.png');background-size: cover",
  //       url:"/ac",
  //     },
  //     {
  //       nombre:'Chevrolet Corvette C3 T Top',
  //       caracteristicas:'date_range',
  //       modelo: 'MODELO 1977',
  //       precio: 'U$S 75.000',
  //       imagen:'https://www.macomeclassic.com.ar/storage/images/vehiculos/jFka67MnfniOIBkFVowjHB2PS66funImAfM41bgw.jpg',
  //       marca:'Chevrolet',
  //       avatar:"background-image: url('https://www.macomeclassic.com.ar/storage/images/vehiculos/mYwFC7AVj389GOJJI8AIIZUNm4JjFhaMRRWWVKHa.png');background-size: cover",
  //       url:"/chevrolet",
  //     },
  //   ]

  // }

  

  // login(){
  //   this.user = true;
  // }

  // logout(){
  //   this.user = false;
  // }

