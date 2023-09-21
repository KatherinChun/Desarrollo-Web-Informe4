import {HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { webService } from '../../services/inicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  carnet: string = '';
  nombre: string = '';
  apellido: string = '';
  password: string = '';
  correo: string = '';
  

  constructor(private Httpcliente:HttpClient,private webService: webService, private router: Router) { }
  Cuenta(){
    this.webService.createUser(this.carnet, this.nombre, this.apellido, this.correo, this.password)
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['/login']); // Navegar al componente de inicio de sesión
      }, (err: any) => {
        console.log(err);
      });
  }

  
}
