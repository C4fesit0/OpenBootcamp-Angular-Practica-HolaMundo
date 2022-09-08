import { Component, OnInit } from '@angular/core';

export type Producto = {
  nombre: string,
  precio: number,
  descripcion: string
}


@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent implements OnInit {

  listaDeElementos : Producto[]=[
    {
      nombre: 'Leche',
      precio: 10,
      descripcion: 'Leche Entera'
    },
    {
      nombre: 'Carne',
      precio:  20,
      descripcion: 'Carne de vaca'
    },
    {
      nombre: 'Coca Cola',
      precio: 15,
      descripcion: 'Coca cola con azucar'
    }
  ];
  cargando :boolean =false;
  opcion:number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCargando():void{
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida:number){
    this.opcion=opcionEscogida;
    console.log(this.opcion);
  }

}
