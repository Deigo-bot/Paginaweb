import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  cars: String[]=[
    "https://www.macomeclassic.com.ar/storage/images/inicio/e8ydmbkwMPMSeWpbX0BueAZuc9kpEc1GAoKTxoKk.png",
    "https://www.macomeclassic.com.ar/storage/images/inicio/mAT3T3lfT473puBjzdjTSMT1Weoa8z3DgyHsoEWQ.png",
    "https://www.macomeclassic.com.ar/storage/images/inicio/5LViTj8c3r5Z7hxDvbh8phO3UQ8BtSbW7arYmn6w.png",
    "https://www.macomeclassic.com.ar/storage/images/inicio/cALKTdcuehNI1jUlQnstSwFkhYXr5nQ7H2K83zZr.png",
    "https://www.macomeclassic.com.ar/storage/images/inicio/1jYPuZfkVPtapFBQgiyUcw7wZuUcaZ90GQzGPPR5.png",
    "https://www.macomeclassic.com.ar/storage/images/inicio/AFTqgGMV6TSKqk6YSnzIM9bNvTEN4ELfCGFoWtUP.png",
    "https://www.macomeclassic.com.ar/storage/images/inicio/hqDF3y1vhvbaKu9VvZMjSwS7d5m8GInjuBZXD5GC.png",
    "https://www.macomeclassic.com.ar/storage/images/inicio/cOXwXzmhcbOTQ5k6xwfNOQ2bHImxG6A8vs7ykP5D.png",
    "https://www.macomeclassic.com.ar/storage/images/inicio/091a3y2eQsarTMqgt4gOfRV0adihyguVS8HnFaFF.png",
    "https://www.macomeclassic.com.ar/storage/images/inicio/L2yCoAyQQAPHF0OGHuPVOWrGzXLeLcHyE4a9xeov.png",
    "https://www.macomeclassic.com.ar/storage/images/inicio/Y8pnAm7XbQIKO3qnbBj2rnz0wnxdRmr3cMEDtCec.png",
    "https://www.macomeclassic.com.ar/storage/images/inicio/a9mKK7giZpMCcu3KdmZlxLRR6NrUKWHGrF3ljsoK.png"
  ]
  panelOpenState = false;
  

  constructor() { }

  ngOnInit(): void {
  
  }

}



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}



