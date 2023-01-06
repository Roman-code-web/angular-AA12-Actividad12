import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentesModule } from '../componentes/componentes.module';
import { ValidacionDirective } from '../directivas/validacion.directive';




@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ComponentesModule,
  ]
})
export class PagesModule { }
