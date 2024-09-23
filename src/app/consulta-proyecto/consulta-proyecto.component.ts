import { Component, OnInit } from '@angular/core';
import {Proyecto} from "./dto/proyecto.dto";
import {NivelesService} from "./niveles.service";
import {Nivel} from "./dto/nivel.dto";

@Component({
  selector: 'app-consulta-proyecto',
  templateUrl: './consulta-proyecto.component.html',
  styleUrls: ['./consulta-proyecto.component.css']
})
export class ConsultaProyectoComponent implements OnInit {

  showFilters: boolean = true;

  // Datos para los dropdowns
  centrosAdministrativos = ['Centro 1', 'Centro 2', 'Centro 3']; // Reemplaza con tus datos
  niveles: Nivel[] = [];
  selectedNivel: Nivel | undefined;
  estados = ['Estado 1', 'Estado 2', 'Estado 3']; // Reemplaza con tus datos
  clasesProyecto = ['Clase 1', 'Clase 2', 'Clase 3']; // Reemplaza con tus datos
  tiposProyecto = ['Tipo 1', 'Tipo 2', 'Tipo 3']; // Reemplaza con tus datos


  projects: Proyecto[]   = [
    {
      "codigo": "12ABC",
      "nombreProyecto": "321",
      "nivel": "xxx",
      "proyectoVinculado": "",
      "convocatoria": "",
      "responsable": "",
      "coordinador": "",
      "tipoProyecto": "",
      "estado": ""
    },
    {
      "codigo": "34DEF",
      "nombreProyecto": "654",
      "nivel": "yyy",
      "proyectoVinculado": "",
      "convocatoria": "",
      "responsable": "",
      "coordinador": "",
      "tipoProyecto": "",
      "estado": ""
    },
    {
      "codigo": "34DEF",
      "nombreProyecto": "654",
      "nivel": "yyy",
      "proyectoVinculado": "",
      "convocatoria": "",
      "responsable": "",
      "coordinador": "",
      "tipoProyecto": "",
      "estado": ""
    }
    // Agrega más objetos de proyecto aquí según sea necesario
  ];
  constructor(private nivelesService: NivelesService) { }

  ngOnInit(): void {
    this.nivelesService.getNiveles(100, 1).subscribe((response) => {
      console.log("return data: ", response);
      //this.niveles = response.data.niveles.map((item :Nivel)=> ({id: item.identificador, text: item.nombre}));
      this.niveles = response.data.niveles;
    });
  }

  limpiarFormulario() {
    console.log("consulta-proyecto,Limpiar formulario")
    this.selectedNivel = undefined;
  }

}
