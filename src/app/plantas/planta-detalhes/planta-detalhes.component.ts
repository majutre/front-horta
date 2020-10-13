import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Planta } from '../plantas.model';
import { PlantaService } from '../planta.service'

@Component({
  selector: 'app-planta-detalhes',
  templateUrl: './planta-detalhes.component.html',
  styleUrls: ['./planta-detalhes.component.css']
})
export class PlantaDetalhesComponent implements OnInit {

  planta: Planta;

  constructor(
    private route: ActivatedRoute,
    private plantaService: PlantaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPlant();
  }

  getPlant(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.plantaService.getPlant(id)
      .subscribe(planta => this.planta = planta);
  }

  goBack(): void {
    this.location.back();
  }

}
