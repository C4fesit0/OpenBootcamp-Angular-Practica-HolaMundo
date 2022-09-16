import { LOCALE_ID, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//Modulos Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';

// Locale para PIPES
import { registerLocaleData } from '@angular/common';
import  localesES  from '@angular/common/locales/es'
registerLocaleData(localesES); //registramos el LOCALE_ID de 'es' para poder usarlo en los pipe

import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

//Modulo Personalizado que exporta componentes de tipo lista
import { ListsModule } from './modules/lists/lists.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    ListaContactosComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalcularPuntuacionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Importamos nuestros modulos personalizados
    ListsModule,
    //Imporamos el HttpClientModule para hacer peticiones http
    HttpClientModule,
    //Importamos reactiveFormsModule para trabajar con formularios reactivos
    ReactiveFormsModule,
    //Imporamos los modulos de Angular Material que usamos en los formularios
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [
    //Registramos el Locale de ES para que los pipes salgan en español
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
