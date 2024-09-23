import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaProyectoComponent } from './consulta-proyecto/consulta-proyecto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

//SHARED
import {ContenedorEncabezadoComponent} from "./shared/contenedor-encabezado/contenedor-encabezado.component";
import {ContenedorPiePaginaComponent} from "./shared/contenedor-pie-pagina/contenedor-pie-pagina.component";



@NgModule({
  declarations: [
    AppComponent,
    ConsultaProyectoComponent,

    //SHARED
    ContenedorEncabezadoComponent,
    ContenedorPiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
