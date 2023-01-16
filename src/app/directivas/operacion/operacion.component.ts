import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent{

  valor1 = 0;
  valor2 = 0;
  resultado = 0;
  operaciones = "ninguna";

  Sumar(){
    this.resultado = this.valor1 + this.valor2;
  }

  ColorUno(){
    return 'blue';
  }

  ColorDos(){
    return 'green';
  }

  ColorTres(){
    return 'purple';
  }

  ColorCuatro(){
    return 'orange';
  }

  ColorCinco(){
    return 'red';
  }
}
