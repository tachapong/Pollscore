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

  }
  getSideMenus() {
    return [{
      title: 'Home', component: 'HomePage'
    },
    {
      title: 'Topic',
      subPages: [{
        title: 'Topic1',
        component: 'ListPage',
      }, {
        title: 'Topic1',
        component: 'ToPage',
      }]
    }];
  }

  Add() {
    this.navCtrl.push(ListPage)
  }

}



