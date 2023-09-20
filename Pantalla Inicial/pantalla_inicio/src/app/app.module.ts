import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // importar el modulo http
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component'; 
import { RegistroComponent } from './paginas/registro/registro.component'; // importar el componente
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { ContraComponent } from './paginas/contra/contra.component';
import { CursosComponent } from './paginas/cursos/cursos.component'; // importar el modulo de rutas
import { VerPerfComponent } from './paginas/ver-perfil/verperf.component';

import {webService} from './services/inicio.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    ContraComponent,
    CursosComponent,
    VerPerfComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [
      webService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
