import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './table/table.component';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardComponent,
    TableComponent
    
  ],
  exports:[
    CardComponent,
    TableComponent,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule
   
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }




