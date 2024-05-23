import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudianteComponent } from './estudiante.component';
import { FormsModule } from '@angular/forms';
import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
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
    const testcases=[
      {input: "John123$", expected: "No es un nombre válido"},
      {input: "John Boe", expected: null}
    ]

    testcases.forEach(testcase=>{
      component.estudiante.nombre=testcase.input;

      fixture.detectChanges();
      const compiled=fixture.nativeElement as HTMLElement;

      if (testcase.expected) {
        expect(compiled.querySelector('span.no')?.textContent).toBe(testcase.expected, `Failed for Input: ${testcase.input}`);
      } else {
        expect(compiled.querySelector('span.no')).toBeNull(`Expected no error message for Input: ${testcase.input}`);
      }
    })
  });

  it('should validate email field', () => {
    const testcases2=[
      {input: "invalidemail", expected: "No es un correo válido"},
      {input: "valid@email.com", expected: null}
    ]

    testcases2.forEach(testcase2=>{
      component.estudiante.nombre=testcase2.input;

      fixture.detectChanges();
      const compiled=fixture.nativeElement as HTMLElement;

      if (testcase2.expected) {
        expect(compiled.querySelector('span.cor')?.textContent).toBe(testcase2.expected, `Failed for Input: ${testcase2.input}`);
      } else {
        expect(compiled.querySelector('span.cor')).toBeTruthy();
      }
    })
  });

  it('should validate password field', () => {
    const testcases3=[
      {input: "pass", expected: "La clave debe tener minimo 5 digitos y 1 simbolo"},
      {input: "password", expected: "La clave debe tener minimo 5 digitos y 1 simbolo"},
      {input: "Password123", expected: null}
    ]

    testcases3.forEach(testcase3=>{
      component.estudiante.nombre=testcase3.input;

      fixture.detectChanges();
      const compiled=fixture.nativeElement as HTMLElement;

      if (testcase3.expected) {
        expect(compiled.querySelector('span.cla')?.textContent).toBe(testcase3.expected, `Failed for Input: ${testcase3.input}`);
      } else {
        expect(compiled.querySelector('span.cla')).toBeTruthy();
      }
    })
  });
});
