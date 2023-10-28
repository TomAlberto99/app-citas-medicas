import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCitasComponent } from './listar-citas/listar-citas.component';

const routes: Routes = [
  {
    path: "turnos",
    component: ListarCitasComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
