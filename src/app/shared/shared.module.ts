import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './shared-components/shared-components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    SharedComponentsModule
  ]
})
export class SharedModule { }
