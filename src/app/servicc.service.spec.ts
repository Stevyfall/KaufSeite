import { TestBed } from '@angular/core/testing';

import { ServiccService } from './servicc.service';

describe('ServiccService', () => {
  let service: ServiccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
