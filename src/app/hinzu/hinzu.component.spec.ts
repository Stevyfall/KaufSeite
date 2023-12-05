import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinzuComponent } from './hinzu.component';

describe('HinzuComponent', () => {
  let component: HinzuComponent;
  let fixture: ComponentFixture<HinzuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HinzuComponent]
    });
    fixture = TestBed.createComponent(HinzuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
