import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ValidacionDirective } from '../directivas/validacion.directive';



@NgModule({
  declarations: [
    FormComponent,
    ValidacionDirective
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    FormComponent
  ]
})
export class ComponentesModule { }
