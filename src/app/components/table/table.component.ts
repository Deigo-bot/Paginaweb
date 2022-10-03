import { Component } from '@angular/core';


export interface PeriodicElement {
  name: string;
  tiempo: string;
  marca: string;
  modelo: string;
}


  
    const ELEMENT_DATA: PeriodicElement[] = [
      { tiempo: '3 meses', name: 'Maserati Gran Turismo', marca: 'Maserati', modelo:'2008' },
      { tiempo: '6 meses', name: 'Chevrolet Camaro', marca: 'Chevrolet', modelo:'1971' },
      { tiempo: '1 año', name: 'Mercedes Benz 300 SL Coupé', marca:'Mercedes Benz' , modelo:'1991' },
      { tiempo: '7 meses', name: 'AC Cobra', marca: 'AC' , modelo:'2008' },
    ];
  
    @Component({
      selector: 'app-table',
      templateUrl: './table.component.html',
      styleUrls: ['./table.component.css'],
    })

export class TableComponent{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
