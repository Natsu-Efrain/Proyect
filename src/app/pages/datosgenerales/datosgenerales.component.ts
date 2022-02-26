import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-datosgenerales',
  templateUrl: './datosgenerales.component.html',
  styleUrls: ['./datosgenerales.component.css']
})
export class DatosgeneralesComponent implements OnInit {
  items: MenuItem[];

  constructor() {this.items = [{
    label: 'Options',
    items: [{
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {

        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {

        }
    }
    ]},
    {
        label: 'Navigate',
        items: [{
            label: 'Angular',
            icon: 'pi pi-external-link',
            url: 'http://angular.io'
        },
        {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload'
        }
    ]}
];
}



  ngOnInit(): void {
  }

}
