import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTeamsComponent } from './register-teams.component';

describe('RegisterTeamsComponent', () => {
  let component: RegisterTeamsComponent;
  let fixture: ComponentFixture<RegisterTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterTeamsComponent]
    });
    fixture = TestBed.createComponent(RegisterTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
