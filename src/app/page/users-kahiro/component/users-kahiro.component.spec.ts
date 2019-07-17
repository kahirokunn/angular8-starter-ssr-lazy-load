import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UsersKahiroComponent } from './users-kahiro.component';
import { UniversalInterceptorModule } from '@/app/middleware/http/universal-interceptor.module';

describe('IndexComponent', () => {
  let component: UsersKahiroComponent;
  let fixture: ComponentFixture<UsersKahiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersKahiroComponent],
      imports: [
        HttpClientTestingModule,
        UniversalInterceptorModule,
        FormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersKahiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
