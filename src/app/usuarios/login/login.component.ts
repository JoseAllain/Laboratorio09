import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { Router } from '@angular/router';
import {Usuario, UsuarioLogin, UsuariosApiService} from "../../@api/usuarios/usuarios-api.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  //constructor(public api:UsuariosApiService) {
  //}

  usuario:UsuarioLogin={
    correo: "",
    contrasena: ""
  }


  constructor(private api: UsuariosApiService, private router: Router) {}

  async iniciarSesion() {
    try {
      const result = await this.api.loginUsuario(this.usuario);
      if (result) {
        this.router.navigate(['/home']); 
      } else {
        console.error("Credenciales incorrectas.");
        
      }
    } catch (error) {
      console.error("Error en el servidor:", error);
      
    }
  }

}
