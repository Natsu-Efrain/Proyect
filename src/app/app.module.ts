import { NavbarComponent } from './pages/navbar/navbar.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {MatSelectModule} from '@angular/material/select';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import { ArbolComponent } from './pages/arbol/arbol.component';
import { MainComponent } from './pages/main/main.component';
import {TreeModule} from 'primeng/tree';
import { TabViewModule } from 'primeng/tabview';
import { DatosgeneralesComponent } from './pages/datosgenerales/datosgenerales.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NewproyectComponent } from './pages/newproyect/newproyect.component';
import { ProyectComponent } from './proyect/proyect.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    ArbolComponent,
    MainComponent,
    DatosgeneralesComponent,
    MenuComponent,
    NavbarComponent,
    NewproyectComponent,
    ProyectComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    CommonModule,
    RouterModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    MatSelectModule,
    TableModule,
    ButtonModule,
    MenubarModule,
    TreeModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
