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
  //menu lateral
  showFilters: boolean = true;

  // VARIABLES DE LOS FILTROS
  //Centros administrativos
  centrosAdministrativos = ['Centro 1', 'Centro 2', 'Centro 3']; // Reemplaza con tus datos
  centroAdministrativoSelected: undefined;
  //Niveles
  niveles: Nivel[] = [];
  selectedNivel: Nivel | undefined;
  //Estados
  estados = ['Estado 1', 'Estado 2', 'Estado 3']; // Reemplaza con tus datos
  estadoSelected: undefined;
  //Clases de proyecto
  clasesProyecto = ['Clase 1', 'Clase 2', 'Clase 3']; // Reemplaza con tus datos
  claseProyectoSelected: undefined;
  //Tipos de proyecto
  tiposProyecto = ['Tipo 1', 'Tipo 2', 'Tipo 3']; // Reemplaza con tus datos
  tiposProyectoSelected: undefined;


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
    //Centros Administrativos
    //TODO
    //Niveles
    this.nivelesService.getNiveles(100, 1).subscribe((response) => {
      console.log("return data: ", response);
      this.niveles = response.data.niveles;
      //TODO Que pasa cuando un servicio de este tipo falla?

    //Estados
    //TODO

    //Clases de proyecto
    //TODO

    //Tipos de proyecto
    //TODO

    });
  }

  limpiarFormulario() {
    console.log("consulta-proyecto,Limpiar formulario")
    this.selectedNivel = undefined;
  }
  buscarProyectos() {
    console.log("consulta-proyecto,Buscar proyectos")
    console.log("Nivel seleccionado: ", this.selectedNivel)
    //TODO: Implementar lógica de búsqueda de proyectos
  }
}
