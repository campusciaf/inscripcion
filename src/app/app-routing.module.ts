import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guards';


import { PageNotFoundComponent } from './componente/page-not-found/page-not-found.component';

import { IniciarComponent } from './componente/inscripcion/iniciar/iniciar.component';
import { OndashboardComponent } from './componente/inscripcion/ondashboard/ondashboard.component';
import { OnloginComponent } from './componente/inscripcion/onlogin/onlogin.component';





const routes: Routes = [
  {path: '', redirectTo:'iniciar' , pathMatch:'full'},
  

 
  {path: 'iniciar', component:IniciarComponent},
  {path: 'onlogin', component:OnloginComponent},
  {path: 'ondashboard', component:OndashboardComponent, canActivate:[LoginGuard]},
  
  
 

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
