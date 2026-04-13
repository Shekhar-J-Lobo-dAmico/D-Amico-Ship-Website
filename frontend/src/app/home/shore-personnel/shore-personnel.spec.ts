import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorePersonnel } from './shore-personnel';

describe('ShorePersonnel', () => {
  let component: ShorePersonnel;
  let fixture: ComponentFixture<ShorePersonnel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShorePersonnel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShorePersonnel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
