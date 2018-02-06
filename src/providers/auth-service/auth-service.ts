import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
let apiUrl = 'https://ahorroygano.com/api/v2/';
//let apiUrl = 'http://localhost:8000/api/v2/';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) { }

  datax:any;

  login(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      //headers.append('Access-Control-Allow-Origin', '*');
      //headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      console.log("url: " + apiUrl + 'login');
      console.log("credencials: " + credentials );
      console.log("headers: " + JSON.stringify(headers) );

      this.http.post(apiUrl + 'login', JSON.stringify(credentials), { headers: headers })
        .map((res: Response) => res.json())
        /*Para quitar el _body dl mapeo sehce estoy*/
        .subscribe(res => {
          resolve(res);
          console.log("res : " + JSON.stringify(res) );
          console.log("status : " + JSON.stringify(res.status));
          console.log("token : " + JSON.stringify(res.success.token) );
          /*
          console.log("id " + JSON.stringify(res.user.id) );
          //localStorage.setItem('id', res.success.user.id);
          console.log("el id del usuario logeado en local S es :" + JSON.parse(localStorage.id) )*/
        },
        (err) => {
          //console.log("error : " + err);
          reject(err);
          console.log("usuario o clave invalidos");
        });
    });
  }

}
