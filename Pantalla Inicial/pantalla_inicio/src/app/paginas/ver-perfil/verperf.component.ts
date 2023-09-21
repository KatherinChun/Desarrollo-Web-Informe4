import { Component } from '@angular/core';
import { webService} from '../../services/inicio.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-verperf',
  templateUrl: './verperf.component.html',
  styleUrls: ['./verperf.component.css']
})
export class VerPerfComponent {
  carnet: string = '';
  perfil: any = [
    {
      "carnet": 200000000,
      "nombre": "nombres",
      "apellido": "apellidos",
      "correo": "ejmplo@gmail.com"
  }
  ];

  constructor(private WebService: webService, private router: Router) {}
  
  mostrarperfil(){
    this.WebService.getuperfil(this.carnet).subscribe((response: any) => {
      const vercarnet = response[0].carnet;
      if (this.carnet === String(vercarnet)){
        this.perfil = response;
        console.log({Text:'entro aqui'})
      }else{
        console.error('Error el perfil no- existe');
      }
      
    });
  }
  
}