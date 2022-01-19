import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuikPassFormComponent } from './quik-pass-form.component';

describe('QuikPassFormComponent', () => {
  let component: QuikPassFormComponent;
  let fixture: ComponentFixture<QuikPassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuikPassFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuikPassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
