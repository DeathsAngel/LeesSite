import { TestBed } from '@angular/core/testing';

import { DataDaoService } from './data.dao.service';

describe('DataDaoService', () => {
  let service: DataDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
