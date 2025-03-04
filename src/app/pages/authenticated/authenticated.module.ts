import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { AuthenticatedComponent } from './authenticated.component';




@NgModule({
  declarations: [
    AuthenticatedComponent
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule,

  ]
})
export class AuthenticatedModule { }
