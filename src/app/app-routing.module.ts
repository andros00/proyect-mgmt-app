import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsultaProyectoComponent} from "./consulta-proyecto/consulta-proyecto.component";

const routes: Routes =
  [
    { path: 'consulta-proyecto', component: ConsultaProyectoComponent },
    { path: '', redirectTo: '/consulta-proyecto', pathMatch: 'full' }, // Redirige a consulta-proyecto al cargar

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
