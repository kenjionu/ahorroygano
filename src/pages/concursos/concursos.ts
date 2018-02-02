import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
let apiUrl = "https://ahorroygano.com/api/v2/";
//let apiUrl = "http://localhost:8000/api/v2/";


@IonicPage()
@Component({
  selector: 'page-concursos',
  templateUrl: 'concursos.html',
})
export class ConcursosPage {
  concurso:any;
  competidores:any;
  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _http: Http) {
    this._http.get(apiUrl + 'concurso')
    .map(res => res.json()).subscribe(data => {

    if(data.status == 'err'){
      console.log('no hay datos' );
    }

    if (data.status == 'ok' ) {
      this.concurso = data.concurso;
      this.competidores = data.competidores;
      console.log('datos recibidos' + JSON.stringify(data));
      console.log(JSON.stringify("   ...    "));
      console.log(JSON.stringify(data.concurso));
      console.log(JSON.stringify(data.competidores));
    }
    },
    error => {
      console.log(error);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConcursosPage');
  }

}
