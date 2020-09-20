import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-da-planta',
  templateUrl: '../paginas.html',
  styleUrls: ['./perfil-da-planta.component.css']
})
export class PerfilDaPlantaComponent implements OnInit {

  nomePlanta: string = 'Cenoura'

  constructor() { }

  ngOnInit(): void {
  }


  title = this.nomePlanta;
}
