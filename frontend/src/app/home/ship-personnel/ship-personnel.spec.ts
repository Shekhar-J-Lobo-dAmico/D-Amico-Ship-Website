import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipPersonnel } from './ship-personnel';

describe('ShipPersonnel', () => {
  let component: ShipPersonnel;
  let fixture: ComponentFixture<ShipPersonnel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipPersonnel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipPersonnel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
