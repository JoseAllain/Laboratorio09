import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  {path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule) },
  { path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) }
];
