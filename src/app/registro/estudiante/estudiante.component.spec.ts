import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudianteComponent } from './estudiante.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('EstudianteComponent', () => {
  let component: EstudianteComponent;
  let fixture: ComponentFixture<EstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, EstudianteComponent, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(EstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate name field', () => {
    expect(component.validateName('John123$')).toBeFalsy();
    expect(component.validateName('John Doe')).toBeTruthy();
  });

  it('should validate email field', () => {
    expect(component.validateEmail('invalidemail')).toBeFalsy();
    expect(component.validateEmail('valid@email.com')).toBeTruthy();
  });

  it('should validate password field', () => {
    expect(component.validatePassword('pass')).toBeFalsy();
    expect(component.validatePassword('password')).toBeFalsy();
    expect(component.validatePassword('Password123')).toBeTruthy();
  });
});
