import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarComponent} from "./listar/listar.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path:'listar',
    component:ListarComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
