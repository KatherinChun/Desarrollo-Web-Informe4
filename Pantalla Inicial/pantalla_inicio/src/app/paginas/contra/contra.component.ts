import { Component } from '@angular/core';
import { webService } from '../../services/inicio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contra',
  templateUrl: './contra.component.html',
  styleUrls: ['./contra.component.css']
})
export class ContraComponent {
  carnet: string = '';
  nuevaContrasena: string = '';
  mensaje: string = ''; // Add this line

  constructor(private webService: webService, private router:Router) { }

  Actualizar() {
      if (this.nuevaContrasena === '') {
        alert('Debe ingresar una nueva contraseña');
        return;
      }
      this.webService.updatePassword(this.carnet, this.nuevaContrasena)
        .subscribe((res: any) => {
          console.log(res);
          this.mensaje = 'Contraseña actualizada exitosamente';
        }, (err: any) => {
          console.log(err);
          this.mensaje = 'Error al actualizar la contraseña';
        });
  }
    
  cerrarModal(){
    this.mensaje = '';
    this.router.navigate(['/login']);
  }
    
  
      
}




  

  

}
