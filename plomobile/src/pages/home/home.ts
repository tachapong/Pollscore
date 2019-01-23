import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: HttpClient) {
    // this.http.get<YOUR_MODEL_NAME_HERE>("ENTER_YOUR_API_HERE").subscribe(
    //   it => {
    //       // SUCCESS: Do something
    //   }, 
    //   error => {
    //       // ERROR: Do something
    //   });
  }
  Add(){
    this.navCtrl.push(ListPage);
  }

}
