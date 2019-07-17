import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IndexComponent } from './index.component';
import { UniversalInterceptorModule } from '@/app/middleware/http/universal-interceptor.module';
import { SomeComponent } from '@/app/component/some-component/some.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IndexComponent,
        SomeComponent,
      ],
      imports: [
        HttpClientTestingModule,
        UniversalInterceptorModule,
        FormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
