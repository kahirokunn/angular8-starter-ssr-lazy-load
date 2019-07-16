import { TestBed } from '@angular/core/testing';

import { GithubUserInfoService } from './github-user-info.service';

describe('GithubUserInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubUserInfoService = TestBed.get(GithubUserInfoService);
    expect(service).toBeTruthy();
  });
});
