import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component'; 
import { RegistroComponent } from './paginas/registro/registro.component'; // importar el componente
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { ContraComponent } from './paginas/contra/contra.component';
import { CursosComponent } from './paginas/cursos/cursos.component'; // importar el modulo de rutas

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    ContraComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
