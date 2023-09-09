import { Component } from '@angular/core';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  nombre: string = '';
  contrasena: string = '';


  Cuenta() {
    // Aquí puedes agregar la lógica para iniciar sesión.
    // Por ejemplo, puedes enviar los datos al servidor para autenticar al usuario.
    // También puedes mostrar un mensaje de error si la autenticación falla.
  }

}
