import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ListarCitasComponent } from './components/citas/listar-citas/listar-citas.component';

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent,
    loadChildren:()=> import("./pages/pages.module").then(m=>m.PagesModule)
  },
  {
    path: "login",
    component: LoginComponent,
    loadChildren:()=> import("./components/auth/auth.module").then(m=> m.AuthModule)
  },
  {
    path: "turnos",
    component: ListarCitasComponent,
    loadChildren:()=>  import("./components/citas/citas.module").then(m=> m.CitasModule)

  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
