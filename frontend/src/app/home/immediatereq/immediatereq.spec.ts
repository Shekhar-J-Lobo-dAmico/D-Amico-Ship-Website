import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Immediatereq } from './immediatereq';

describe('Immediatereq', () => {
  let component: Immediatereq;
  let fixture: ComponentFixture<Immediatereq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Immediatereq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Immediatereq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
