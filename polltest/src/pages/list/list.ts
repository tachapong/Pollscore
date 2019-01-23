import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    [
      {
        "category":"PC",
        "subs": [
          {
            "subcategory":"Processor",
            "manufactures": [
              {
                "manufacture":"Intel"
              },
              {
                "manufacture":"AMD"
              }
            ]
          },
          {
            "subcategory":"Motherboard",
            "manufactures": [
              {
                "manufacture":"Asus"
              },
              {
                "manufacture":"AMD"
              },
              {
                "manufacture":"GigaByte"
              },
              {
                "manufacture":"Intel"
              }
            ]
          },
          {
            "subcategory":"Memory",
            "manufactures": [
              {
                "manufacture":"Visipro"
              },
              {
                "manufacture":"Crucial"
              },
              {
                "manufacture":"VenomRX"
              }
            ]
          }
        ]
      },
      {
        "category":"Laptop",
        "subs": [
          {
            "subcategory":"Notebook",
            "manufactures": [
              {
                "manufacture":"Lenovo"
              },
              {
                "manufacture":"Dell"
              }
            ]
          },
          {
            "subcategory":"Netbook",
            "manufactures": [
              {
                "manufacture":"Lenovo"
              },
              {
                "manufacture":"Dell"
              },
              {
                "manufacture":"Acer"
              },
              {
                "manufacture":"HP"
              }
            ]
          }
        ]
      },
      {
        "category":"Printer",
        "subs": [
          {
            "subcategory":"Laserjet",
            "manufactures": [
              {
                "manufacture":"HP"
              },
              {
                "manufacture":"Brother"
              },
              {
                "manufacture":"Canon"
              },
              {
                "manufacture":"Samsung"
              }
            ]
          },
          {
            "subcategory":"Deskjet",
            "manufactures": [
              {
                "manufacture":"HP"
              },
              {
                "manufacture":"Canon"
              },
              {
                "manufacture":"Epson"
              }
            ]
          }
        ]
      }
    ]
  }
  

  
}

