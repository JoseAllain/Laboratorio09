import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {GeneralModule} from "../../general/general.module";
import {Usuario, UsuariosApiService} from "../../@api/usuarios/usuarios-api.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [
    RouterLink,
    GeneralModule,
    FormsModule
  ],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.scss'
})
export class PadreComponent {

  constructor(public api:UsuariosApiService) {
  }
  padre:Usuario={
    idpadre: 0,
    tipo: "Padre",
    apellido: '',
    clave: '',
    correo: '',
    nombre: ''
  }

  async singup(){
    await this.api.registerUsuario(this.padre)
    alert("Registro Exitoso");
    this.padre={
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
