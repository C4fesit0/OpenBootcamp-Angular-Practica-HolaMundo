import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {



  constructor() { }


  obtenerContactos(): IContacto[]{
    return CONTACTOS; //Nos devuelve un listado de contactos
  }

  obtenerContactoPorID(id: number): IContacto | undefined{
    const contacto = CONTACTOS.find( (contacto: IContacto)=> id==contacto.id);
    if(contacto){
      return contacto;
    }else{
      return;
    }
  }
}
