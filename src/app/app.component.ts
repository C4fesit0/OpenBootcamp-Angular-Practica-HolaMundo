import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HolaMundo';
  usuario = '@masajo';

  /* Esta funcion se ejecutaro¡ cuando en el Hijo (Saludo Component) se pulse un boton */
  recibirMensajeDelHijo(evento: string){
    alert(evento);
  }

}
