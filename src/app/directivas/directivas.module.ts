import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionComponent } from './operacion/operacion.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OperacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    OperacionComponent
  ]
})
export class DirectivasModule { }
