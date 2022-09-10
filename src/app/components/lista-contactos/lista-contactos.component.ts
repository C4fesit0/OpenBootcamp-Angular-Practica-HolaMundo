import { Component, OnInit, OnDestroy } from '@angular/core';
//Importamos los contactos
import { ContactoService } from '../../services/contacto.service';
import { IContacto } from '../../models/contacto.interface';

import { Subscription } from 'rxjs';




@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy {
  //Creamos una lista de contactos
  listaDeContactos: IContacto[] = [];

  contactoSeleccionado: IContacto | undefined;

  //subscripcion de Servico
  subscription : Subscription | undefined;

  //Inyectamos en el constructor el servicio de contactos
  constructor( private  contactoService: ContactoService) { }

  ngOnInit(): void {
    
    //Obtener la lista de contactos que nos brinda el servicio
    this.contactoService.obtenerContactos()
        .then( (lista : IContacto[])=>{
            this.listaDeContactos=lista;
          }
        )
      .catch((error)=> console.error(error))
      .finally( ()=> console.log('Peticion de lista de contactos terminada'));
    console.table(this.listaDeContactos);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  obtenerContacto(id: number){
    //console.log(`Obtener info del contacto:${id}`);
    this.contactoService.obtenerContactoPorID(id)?.subscribe(
      (contacto: IContacto) => this.contactoSeleccionado= contacto
    )
    /* .then(
      (contacto)=>{
        this.contactoSeleccionado=contacto;
      }
    )
    .catch( (error)=> console.log(`Ha habido un error al seleccionar el contacto:$${error}`))
    .finally(()=> console.log('Peticion de contacto por ID terminada')); */

    console.log(this.contactoSeleccionado);
  }

}
