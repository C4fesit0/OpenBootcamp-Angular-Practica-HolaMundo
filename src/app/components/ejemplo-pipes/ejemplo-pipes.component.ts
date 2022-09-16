import { Component, OnInit } from '@angular/core';
import { IJugador } from '../../models/jugador.interface';
import { IContacto } from '../../models/contacto.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent implements OnInit {

  dob: Date = new Date(1991,3,10);
  cambio: boolean=true;
  nombre: string ='Martin';
  numero_PI: number = 3.1415926535897;
  precioCarrito: number = 100;

  persona: IContacto={
    id: 0,
    nombre: 'Martin',
    apellidos: 'San Jose',
    edad: 30,
    email: 'martin@imaginagroup.com'
  }

  cantidad: number = 0.3512;
  textoLargo:string = 'asddfsdfgsd asd asfgdfsg asdad';
  
  

  //Ejemplo para calcular la puntuacion
  jugador1: IJugador= {
    nombre: 'Martin',
    puntos: [10,30,40,0]
  }

  jugador2: IJugador={
    nombre: 'Pepe',
    puntos: [0,80,10,5]
  }

  constructor() { }

  ngOnInit(): void {
  }

  get dateFormat() {
    return this.cambio? 'shortDate': 'fullDate'
  }

  cambiarFormato(){
    this.cambio =! this.cambio;
    console.log(this.cambio)
  }

}
