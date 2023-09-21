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

      updatePassword(carnet: string, password: string) {
        const user = {
          password: password
        };
        return this.http.put(`${this.API_URI}/updatePassword/${carnet}`, user);
    }





}