import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';  // importar el componente 
import { InicioComponent } from './paginas/inicio/inicio.component';
import {ContraComponent} from './paginas/contra/contra.component';
import { CursosComponent } from './paginas/cursos/cursos.component';
import { VerPerfComponent } from './paginas/ver-perfil/verperf.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },     //ruta del componente o pagina
  { path: 'inicio', component: InicioComponent}, // ruta Inicio
  { path: '', redirectTo: '/login', pathMatch: 'full' },   // ruta por defecto
  { path: 'contra', component: ContraComponent},
  { path: 'cursos', component: CursosComponent},
  { path: 'verperf', component: VerPerfComponent}
];

@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
  static forRoot: any;
}
