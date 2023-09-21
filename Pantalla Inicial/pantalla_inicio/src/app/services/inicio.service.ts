import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class webService{
    private userverf: boolean = false;
    private userdata: string = "";
    API_URI = 'http://localhost:3000/inicio'

    constructor(private http: HttpClient){}

    login(carnet: string){
        this.userverf = true;
        this.userdata = carnet;
    }

    
    getpassword(carnet: string){
        return this.http.get(`${this.API_URI}/${carnet}`);
    }

    getuperfil(carnet: string){
        return this.http.get(`${this.API_URI}/perfil/${carnet}`);
    }

    createUser(carnet: string, nombre: string, apellido: string, correo: string, password: string) {
        const user = {
          carnet: carnet,
          nombre: nombre,
          apellido: apellido,
          correo: correo,
          password: password
        };
        return this.http.post(`${this.API_URI}/createUser`, user);
      }
    
    createpublicacion(carnet: string, curso: string, catedratico:string, mensaje:string){
        const pub = {
            carnet: carnet,
            curso: curso,
            catedratico: catedratico,
            mensaje: mensaje
        };
        return this.http.post(`${this.API_URI}/publicacion`, pub)
    }  
}