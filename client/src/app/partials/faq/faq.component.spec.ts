import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqLandingComponent } from './faq-landing.component';

describe('FaqLandingComponent', () => {
  let component: FaqLandingComponent;
  let fixture: ComponentFixture<FaqLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
