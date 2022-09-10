import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';
//Importamos Observables de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {



  constructor() { }


  obtenerContactos(): Promise<IContacto[]>{
    return  Promise.resolve(CONTACTOS); //Nos devuelve un listado de contactos
  }

  obtenerContactoPorID(id: number): Observable<IContacto> | undefined{

    //Buscamos al contacto por ID dentro de la lista de contactos Mockeados
    const contacto = CONTACTOS.find( (contacto: IContacto)=> id==contacto.id);

    //Creamos un Observable
    let observable: Observable<IContacto> = new Observable(observer => {
      observer.next(contacto) //Emitir un valor a todo componente suscrito 
      observer.complete() //No emitimas mas valores
    })

    if(contacto){
      return observable;
      //return Promise.resolve(contacto);
    }else{
      return;
    }
  }
}
