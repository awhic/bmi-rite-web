import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNetAssetsGraphFormComponent } from './add-net-assets-graph-form.component';

describe('AddNetAssetsGraphFormComponent', () => {
  let component: AddNetAssetsGraphFormComponent;
  let fixture: ComponentFixture<AddNetAssetsGraphFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNetAssetsGraphFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNetAssetsGraphFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
