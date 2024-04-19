import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion Calculadora';
  OperandoA: number = 0;
  OperandoB: number = 0;
  Resultado: number = 0;
  titulo: any;
  Sumar():void{
  this.Resultado=this.OperandoA + this.OperandoB 
}
}