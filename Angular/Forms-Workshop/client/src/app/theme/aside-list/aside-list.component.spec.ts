import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideListComponent } from './aside-list.component';

describe('AsideListComponent', () => {
  let component: AsideListComponent;
  let fixture: ComponentFixture<AsideListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
