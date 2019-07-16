import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GithubUserInfoService } from './github-user-info.service';
import { universalInterceptorProvider } from '../middleware/http/universal-interceptor.provider';

describe('GithubUserInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
    providers: [
      universalInterceptorProvider
    ]
  }));

  it('should be created', () => {
    const service: GithubUserInfoService = TestBed.get(GithubUserInfoService);
    expect(service).toBeTruthy();
  });
});
