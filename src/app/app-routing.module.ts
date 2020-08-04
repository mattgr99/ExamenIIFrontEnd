import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoMainComponent } from './components/alumno-main/alumno-main.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';
import { MateriaFormComponent } from './components/materia-form/materia-form.component';
import { MatriculaFormComponent } from './components/matricula-form/matricula-form.component';
import { BecaListComponent } from './components/beca-list/beca-list.component';
import { BecaFormComponent } from './components/beca-form/beca-form.component';
import { BecaCardComponent } from './components/beca-card/beca-card.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'alumnos', component: AlumnoMainComponent},
  {path: 'alumnos/:id', component: AlumnoCardComponent},
  {path: 'materias', component: MateriaFormComponent},
  {path: 'materias/:id', component: MateriaFormComponent},
  {path: 'matriculas', component: MatriculaFormComponent},
  {path: 'becas', component: BecaListComponent},
  {path: 'becas/add', component:BecaFormComponent},
  {path: 'becas/edit/:id', component: BecaFormComponent},
  {path: 'becas/:id', component: BecaCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
