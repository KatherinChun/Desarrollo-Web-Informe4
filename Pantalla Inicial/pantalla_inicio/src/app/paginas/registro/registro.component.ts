import {HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  nombre: string = '';
  contrasena: string = '';
  apellidos: string = '';
  correo: string = '';
  carnet: string = '';


constructor(private http: HttpClient) { }



  Cuenta() {
    const usuario = {
      carnet: this.nombre, // Puedes asignar los valores adecuados aquí
      name: this.nombre,
      lastname: this.apellidos,
      email: this.correo,
      password: this.contrasena
    };

  this.http.post('http://localhost:4200/UserR/registrarse', usuario).subscribe(
    (response) => {
      console.log(response);
      console.log('Usuario creado exitosamente');
      // Muestra un mensaje de éxito al usuario
      
    },
    (error) => {
      console.error(error); // Maneja los errores
      console.log('Error al crear usuario');
      // Muestra un mensaje de error al usuario si es necesario
    }
  );
  
}

  
}
