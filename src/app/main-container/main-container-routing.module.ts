import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { PerfilComponent } from '../usuarios/perfil/perfil.component';
import { AyudaComponent } from '../usuarios/ayuda/ayuda.component';
import { MicuentaComponent } from '../usuarios/micuenta/micuenta.component';
import { ConsultaComponent } from '../estudiantes/consulta/consulta.component';
import { ListadoCursosComponent } from '../cursos/listado-cursos/listado-cursos.component';
import { ListaInscripcionComponent } from '../inscripcion/lista-inscripcion/lista-inscripcion.component';

const routes: Routes = [
  {
    path: 'main',
    component: TemplateComponent,
    children: [
      {path: 'perfil', component: PerfilComponent},
      {path: 'ayuda', component:AyudaComponent},
      {path: 'micuenta', component: MicuentaComponent},
      {path: 'consulta-cursos', component: ListadoCursosComponent},
      {path: 'consulta-estudiante', component: ConsultaComponent},
      {path: 'inscripcion', component: ListaInscripcionComponent},
      {path: '**', redirectTo: 'perfil'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContainerRoutingModule { }
