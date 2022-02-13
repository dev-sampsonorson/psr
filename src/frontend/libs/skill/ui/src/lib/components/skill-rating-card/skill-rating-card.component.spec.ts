import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillRatingCardComponent } from './skill-rating-card.component';

describe('SkillRatingCardComponent', () => {
  let component: SkillRatingCardComponent;
  let fixture: ComponentFixture<SkillRatingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillRatingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillRatingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
