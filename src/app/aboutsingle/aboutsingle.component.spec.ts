import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsingleComponent } from './aboutsingle.component';

describe('AboutsingleComponent', () => {
  let component: AboutsingleComponent;
  let fixture: ComponentFixture<AboutsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutsingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
