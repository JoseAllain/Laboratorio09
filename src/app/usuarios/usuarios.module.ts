import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import {ListarComponent} from "./listar/listar.component";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    HttpClientModule
  ]
})
export class UsuariosModule { }
