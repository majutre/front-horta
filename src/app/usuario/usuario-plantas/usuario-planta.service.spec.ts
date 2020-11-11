import { TestBed } from '@angular/core/testing';

import { UsuarioPlantaService } from './usuario-planta.service';

describe('UserPlantsService', () => {
  let service: UsuarioPlantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioPlantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});