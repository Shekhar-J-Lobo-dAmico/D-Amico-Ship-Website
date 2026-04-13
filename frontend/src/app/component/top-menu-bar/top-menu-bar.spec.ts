import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuBar } from './top-menu-bar';

describe('TopMenuBar', () => {
  let component: TopMenuBar;
  let fixture: ComponentFixture<TopMenuBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMenuBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMenuBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
