import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-arbol',
  templateUrl: './arbol.component.html',
  styleUrls: ['./arbol.component.scss']
})
export class ArbolComponent implements OnInit {

  constructor() {
    this.files3 = Array.from({length: 1}).map((_,i) => this.createNode(i, 3));

  }

  ngOnInit(): void {
  }

  carpeta_i = ['Tecnico','Administrativo'];
  etapa_i = ['Etapa 1','Etapa 2'];

  files3: TreeNode[];

  createNode(i: number, children: number): TreeNode {
    let node: TreeNode = {
        label:' 2016-01-01-2091',
        data: '2016-01-01-2091',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: Array.from({length: children}).map((_,j) => {
          if(j == 0)
          {
            return {
              label: 'Oficio',
              data: 'Oficio',
              expandedIcon: 'pi pi-folder-open',
              collapsedIcon: 'pi pi-folder'
          }
          }
          else if(j == 1)
          {
            return {
              label: 'Informes',
              data: 'Informes',
              expandedIcon: 'pi pi-folder-open',
              collapsedIcon: 'pi pi-folder',
              children: Array.from({length: 2}).map((_,j) => {
                if(j == 0){
                  return{
                    label: this.carpeta_i[j],
                    data:  this.carpeta_i[j],
                    expandedIcon: 'pi pi-folder-open',
                    collapsedIcon: 'pi pi-folder',
                    children :
                    Array.from({length: 2}).map((_,j) => {
                        return{
                          label: this.etapa_i[j],
                          data:  this.etapa_i[j],
                          expandedIcon: 'pi pi-folder-open',
                          collapsedIcon: 'pi pi-folder'
                        }
                  })
                  }
                }
                else{
                  return{
                    label: this.carpeta_i[j],
                    data:  this.carpeta_i[j],
                    expandedIcon: 'pi pi-folder-open',
                    collapsedIcon: 'pi pi-folder'
                  }
                }
            })
          };
          }
          else if(j == 2)
          {
            return {
              label: 'Cierre',
              data: 'Cierre',
              expandedIcon: 'pi pi-folder-open',
              collapsedIcon: 'pi pi-folder'
          }
          }
          else {
            return {
          }
          }

        })
    };

    return node;
}

}
