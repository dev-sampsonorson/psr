import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateMyskillComponent } from './rate-myskill.component';

describe('RateMyskillComponent', () => {
  let component: RateMyskillComponent;
  let fixture: ComponentFixture<RateMyskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateMyskillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateMyskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
