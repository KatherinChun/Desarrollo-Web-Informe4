import { Component, OnInit } from '@angular/core';
import { webService} from '../../services/inicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit{
  carnet: string = '';
  contrasena: string = '';

  ngOnInit(): void {}

  InicioApp() {
    // Aquí puedes agregar la lógica para iniciar sesión.
    // Por ejemplo, puedes enviar los datos al servidor para autenticar al usuario.
    // También puedes mostrar un mensaje de error si la autenticación falla.
  }

  
}