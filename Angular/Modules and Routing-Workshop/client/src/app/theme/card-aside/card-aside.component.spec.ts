import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAsideComponent } from './card-aside.component';

describe('CardAsideComponent', () => {
  let component: CardAsideComponent;
  let fixture: ComponentFixture<CardAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
