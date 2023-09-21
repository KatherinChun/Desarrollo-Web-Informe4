import {HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { webService } from '../../services/inicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent {
  carnet: string = '';
  curso: string = '';
  catedratico: string = '';
  mensaje:string = ""

  constructor(private Httpcliente:HttpClient,private webService: webService, private router: Router) { }

  Publicarr() {
    this.webService.createpublicacion(this.carnet, this.curso, this.catedratico, this.mensaje)
    .subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['/inicio']);
    },(err: any)=>{
      console.log(err);
    });
  }

}  
