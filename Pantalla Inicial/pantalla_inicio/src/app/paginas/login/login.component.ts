import { Component } from '@angular/core';
import './LoginComponent.css';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre: string = '';
  contrasena: string = '';
  recordarUsuario: boolean = false;

  iniciarSesion() {
    // Aquí puedes agregar la lógica para iniciar sesión.
    // Por ejemplo, puedes enviar los datos al servidor para autenticar al usuario.
    // También puedes mostrar un mensaje de error si la autenticación falla.
  }
}
