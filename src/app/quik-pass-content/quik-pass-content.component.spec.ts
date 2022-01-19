import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuikPassContentComponent } from './quik-pass-content.component';

describe('QuikPassContentComponent', () => {
  let component: QuikPassContentComponent;
  let fixture: ComponentFixture<QuikPassContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuikPassContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuikPassContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
