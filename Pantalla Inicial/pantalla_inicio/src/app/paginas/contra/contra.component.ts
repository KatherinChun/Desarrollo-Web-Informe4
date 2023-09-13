import { Component } from '@angular/core';

@Component({
  selector: 'app-contra',
  templateUrl: './contra.component.html',
  styleUrls: ['./contra.component.css']
})
export class ContraComponent {
  carnet: string = '';
  correo: string = '';
  contrasena: string = '';

  Cambiar() {
    // Aquí puedes agregar la lógica para iniciar sesión.
    // Por ejemplo, puedes enviar los datos al servidor para autenticar al usuario.
    // También puedes mostrar un mensaje de error si la autenticación falla.
  }

  Actualizar() {
    
  }
}
