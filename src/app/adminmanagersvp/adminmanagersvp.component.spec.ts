import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmanagersvpComponent } from './adminmanagersvp.component';

describe('AdminmanagersvpComponent', () => {
  let component: AdminmanagersvpComponent;
  let fixture: ComponentFixture<AdminmanagersvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmanagersvpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmanagersvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
