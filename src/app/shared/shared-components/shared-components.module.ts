import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TopNavbarComponent } from './navbar/top-navbar/top-navbar.component';
import { MiddleNavbarComponent } from './navbar/middle-navbar/middle-navbar.component';
import { LaguageDropdownComponent } from './navbar/top-navbar/laguage-dropdown/laguage-dropdown.component';



@NgModule({
  declarations: [
    NavbarComponent,
    TopNavbarComponent,
    MiddleNavbarComponent,
    LaguageDropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedComponentsModule { }
