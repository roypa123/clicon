import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/authenticated/authenticated.module').then(
        (m) => m.AuthenticatedModule
      ),
  },

  // {
  //   path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full',
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
