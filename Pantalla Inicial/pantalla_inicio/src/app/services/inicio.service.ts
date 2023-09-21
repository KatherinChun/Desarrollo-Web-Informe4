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
}