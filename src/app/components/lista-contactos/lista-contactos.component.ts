import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { IContacto } from '../../models/contacto.interface';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit {
  //Creamos una lista de contactos
  listaDeContactos: IContacto[] = [];


  //Inyectamos en el constructor el servicio de contactos
  constructor( private  contactoService: ContactoService) { }

  ngOnInit(): void {
    
    //Obtener la lista de contactos que nos brinda el servicio
    this.listaDeContactos=this.contactoService.obtenerContactos();


  }

  

}
