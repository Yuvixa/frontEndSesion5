import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDocenteComponent } from './components/add-docente/add-docente.component';

const routes: Routes = [{ path: 'addDocente', component: AddDocenteComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
