import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//rutas
import {PerfilComponent} from '../perfil/perfil.component';
import {SkillsComponent} from '../skills/skills.component';
import {JobsComponent} from '../jobs/jobs.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'jobs', component: JobsComponent },
  { path:'skills',component: SkillsComponent },
  // cualquier otro path sera redireccionado al portafolio
  { path: '**', pathMatch: 'full', redirectTo: 'perfil' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
