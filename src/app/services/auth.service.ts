import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htttp: HttpClient) { 

  }

  login(email:string, password:string) :Observable<any> {

    let body ={
      email: email,
      password: password
    }
    //Devolvemos la respuesta del observable cuando la peticion http
    //se ha completado, el componente accedera al token de login
    return this.htttp.post('https://reqres.in/api/login', body)
  }

}
