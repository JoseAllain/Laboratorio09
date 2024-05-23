import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {GeneralModule} from "../../general/general.module";
import {Usuario, UsuariosApiService} from "../../@api/usuarios/usuarios-api.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-profesor',
  standalone: true,
  imports: [
    RouterLink,
    GeneralModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.scss'
})
export class ProfesorComponent {
  constructor(public api:UsuariosApiService) {
  }

  profesor: Usuario={
    apellido: "",
    clave: "",
    correo: "",
    idpadre: 0,
    nombre: "",
    tipo: ""

  }

  async singup(){
    await this.api.registerUsuario(this.profesor)
    alert("Registro Exitoso");
    this.profesor={
      apellido: "",
      clave: "",
      correo: "",
      idpadre: 0,
      nombre: "",
      tipo: ""
    }
    window.location.href="usuarios/login"
  }

}
