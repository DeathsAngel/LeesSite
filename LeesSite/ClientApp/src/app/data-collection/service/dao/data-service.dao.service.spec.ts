import { TestBed } from '@angular/core/testing';

import { DataServiceDaoService } from './data-service.dao.service';

describe('DataServiceDaoService', () => {
  let service: DataServiceDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiceDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
