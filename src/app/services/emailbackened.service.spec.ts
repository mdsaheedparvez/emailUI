import { TestBed } from '@angular/core/testing';

import { EmailbackenedService } from './emailbackened.service';

describe('EmailbackenedService', () => {
  let service: EmailbackenedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailbackenedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
