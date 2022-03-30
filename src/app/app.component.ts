import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  numeroUno: number = 0;
  numeroDos: number = 0;
  resultado: number = 0;

  sumar():void{
    this.resultado= this.numeroUno+ this.numeroDos;
  }

  resta():void {
    this.resultado= this.numeroUno -this.numeroDos;
  }

  multiplicar():void {
    this.resultado= this.numeroUno *this.numeroDos;
  }
  dividir():void {
    this.resultado= this.numeroUno /this.numeroDos;
  }
}
