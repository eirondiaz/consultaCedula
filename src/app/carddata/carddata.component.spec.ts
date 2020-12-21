import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddataComponent } from './carddata.component';

describe('CarddataComponent', () => {
  let component: CarddataComponent;
  let fixture: ComponentFixture<CarddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
