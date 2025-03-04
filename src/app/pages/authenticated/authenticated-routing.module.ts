import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedComponent } from './authenticated.component';
import { AuthenticatedGuard } from './authenticated.guard';

const routes: Routes = [
  {
    path:'',
    component: AuthenticatedComponent,
    canActivate: [AuthenticatedGuard],
    children: [

    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
