import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacaroonComponent } from './macaroon.component';

describe('MacaroonComponent', () => {
  let component: MacaroonComponent;
  let fixture: ComponentFixture<MacaroonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacaroonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacaroonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
