import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridaeContentComponent } from './fridae-content.component';

describe('FridaeContentComponent', () => {
  let component: FridaeContentComponent;
  let fixture: ComponentFixture<FridaeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FridaeContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FridaeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
