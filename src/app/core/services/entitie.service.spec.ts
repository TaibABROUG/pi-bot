import { TestBed } from '@angular/core/testing';

import { EntitieService } from './entitie.service';

describe('EntitieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntitieService = TestBed.get(EntitieService);
    expect(service).toBeTruthy();
  });
});
