import { Component } from '@angular/core';
import { webService} from '../../services/inicio.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  carnet: string = '';
  contrasena: string = '';

  constructor(private WebService: webService, private router: Router) {}

  iniciarSesion() {
    
    // Utiliza el servicio para obtener la contraseña del usuario
    this.WebService.getpassword(this.carnet).subscribe((response: any) => {
      const storedPassword = response.password; // Contraseña almacenada en el servidor
      //console.log(storedPassword);
      // Compara la contraseña ingresada con la almacenada en el servidor
      if (this.contrasena === storedPassword) {
        this.router.navigate(['/inicio']); 
      } else {
        console.log('Error de autenticación: Contraseña incorrecta');
      }
    });
  }
  
}
