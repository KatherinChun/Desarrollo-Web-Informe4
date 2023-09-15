import { Component } from '@angular/core';


@Component({
  selector: 'app-verperf',
  templateUrl: './verperf.component.html',
  styleUrls: ['./verperf.component.css']
})
export class VerPerfComponent {
  nombre: string = '';
  contrasena: string = '';

  InicioApp() {
    // Aquí puedes agregar la lógica para iniciar sesión.
    // Por ejemplo, puedes enviar los datos al servidor para autenticar al usuario.
    // También puedes mostrar un mensaje de error si la autenticación falla.
  }

  
}