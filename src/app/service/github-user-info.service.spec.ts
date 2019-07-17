import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GithubUserInfoService } from './github-user-info.service';
import { UniversalInterceptorModule } from '../middleware/http/universal-interceptor.module';

describe('GithubUserInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      UniversalInterceptorModule
    ],
  }));

  it('should be created', () => {
    const service: GithubUserInfoService = TestBed.get(GithubUserInfoService);
    expect(service).toBeTruthy();
  });
});
