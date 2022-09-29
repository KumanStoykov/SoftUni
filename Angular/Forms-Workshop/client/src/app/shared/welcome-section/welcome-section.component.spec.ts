import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSectionComponent } from './welcome-section.component';

describe('WelcomeSectionComponent', () => {
  let component: WelcomeSectionComponent;
  let fixture: ComponentFixture<WelcomeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
