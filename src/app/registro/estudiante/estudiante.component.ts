import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss'],
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class EstudianteComponent {

  constructor(private router: Router) { }

  estudiante = {
    apellido: "",
    clave: "",
    correo: "",
    idpadre: 0,
    nombre: "",
    tipo: "Estudiante"
  }

  singup() {
    if (this.validateData()) {
      alert("Registro Exitoso");
      this.resetEstudiante();
      this.router.navigate(['/usuarios/login']);
    } else {
      alert("Por favor, corrija los errores en el formulario.");
    }
  }

  resetEstudiante() {
    this.estudiante = {
      apellido: "",
      clave: "",
      correo: "",
      idpadre: 0,
      nombre: "",
      tipo: ""
    }
  }

  validateData(): boolean {
    return this.validateName(this.estudiante.nombre) &&
           this.validateEmail(this.estudiante.correo) &&
           this.validatePassword(this.estudiante.clave);
  }

  validateName(name: string): boolean {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  validatePassword(password: string): boolean {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    return passwordRegex.test(password);
  }
}
