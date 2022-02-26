import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  value1: string = 'Prueba';
  display: boolean = false;
  efr: string = 'Efrain'
  empleados = [
    {name: 'Efrain Evangelista Lopez', rfc: 'EALE990820AS1', rol: 'Responsable tecnico'},
    {name: 'Oscar Alex Lopez Esturia', rfc: 'OALE990820ES1', rol: 'Responsable Administrativo'},
    {name: 'Ana Arial Luz Estrada', rfc: 'AALE990820AJ1', rol: 'Responsable Legal'},
];


prov = [
  {name: 'ITQ561126819', rfc: 'Instituto Tecnológico de Queretaro'},
  {name: 'ITS101126819', rfc: 'ITESM Queretaro'},
];

  constructor() { }

  formBuscar = new FormGroup({
    newPassword: new FormControl('', [Validators.required]),
    newPasswordConfirm: new FormControl('', [Validators.required])
  });




  ngOnInit(): void {
  }


  get busquedaSubmitedF() {
    return this.formBuscar.controls;
  }

  mostrar()
  {
    this.display = true;
  }

}
