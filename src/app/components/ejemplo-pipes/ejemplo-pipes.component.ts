import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent implements OnInit {

  dob: Date = new Date(1991,3,10);
  cambio: boolean=true;
  nombre: string ='Martin';

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