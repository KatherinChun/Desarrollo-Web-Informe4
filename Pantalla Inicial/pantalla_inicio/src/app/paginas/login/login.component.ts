import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre: string = '';
  contrasena: string = '';

  iniciarSesion() {
    // Aquí puedes agregar la lógica para iniciar sesión.
    // Por ejemplo, puedes enviar los datos al servidor para autenticar al usuario.
    // También puedes mostrar un mensaje de error si la autenticación falla.
  }

  
}
