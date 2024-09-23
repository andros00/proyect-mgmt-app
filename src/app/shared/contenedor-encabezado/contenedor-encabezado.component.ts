import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contenedor-encabezado',
  templateUrl: './contenedor-encabezado.component.html',
  styleUrls: ['./contenedor-encabezado.component.css']
})
export class ContenedorEncabezadoComponent implements OnInit {

  usuarioEnSesion = 'Andres Tirado';

  constructor() { }

  ngOnInit(): void {
  }

  cerrarAplicacion() {
  }
}
