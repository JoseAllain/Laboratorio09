import {Component, OnInit} from '@angular/core';
import {UsuarioResponse, UsuariosApiService} from "../../@api/usuarios/usuarios-api.service";
import {JsonPipe, NgFor, NgForOf} from "@angular/common";

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf
  ],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss'
})
export class ListarComponent implements OnInit{

  usuariosList: UsuarioResponse[]=[]
  constructor(public usuarios: UsuariosApiService) {
  }
  ngOnInit(): void {
    this.listarUsuarios()
  }

  async listarUsuarios(){
    this.usuariosList=await this.usuarios.listarUsuarios()
    console.log(this.usuariosList)
  }

  protected readonly NgFor = NgFor;
}
