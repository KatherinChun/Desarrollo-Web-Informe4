import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPerfComponent } from './verperf.component';

describe('VerPerfComponent', () => {
  let component: VerPerfComponent;
  let fixture: ComponentFixture<VerPerfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPerfComponent]
    });
    fixture = TestBed.createComponent(VerPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
