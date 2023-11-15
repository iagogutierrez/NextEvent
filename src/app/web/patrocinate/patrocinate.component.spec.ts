import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinateComponent } from './patrocinate.component';

describe('PatrocinateComponent', () => {
  let component: PatrocinateComponent;
  let fixture: ComponentFixture<PatrocinateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatrocinateComponent]
    });
    fixture = TestBed.createComponent(PatrocinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
