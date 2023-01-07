import { Directive,ElementRef,HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl  } from '@angular/forms';

@Directive({
  selector: '[appValidacion]'
})
export class ValidacionDirective implements OnInit {

  @Input() inputcontrol!:FormControl;
  @Output() onEnviomensajeError= new EventEmitter();

  constructor(private me:ElementRef) {}

  @HostListener('input') onInput(){

    this.validar();
  }
  @HostListener('blur') onClick(){

    this.validar();
   
  }

  ngOnInit(): void {
    //console.log(this.inputcontrol)
  }

  validar(){
    if (this.inputcontrol.invalid){
      
      if(this.inputcontrol.errors?.['required']){
        this.onEnviomensajeError.emit("El campo es requerido");
      }else if(this.inputcontrol.errors?.['pattern'] ){
        if((this.me.nativeElement as HTMLInputElement).name=='correo'){
          this.onEnviomensajeError.emit("correo invalido ejemplo: Alondra@gmail.com");
        }else if((this.me.nativeElement as HTMLInputElement).name=='telefono') {
          this.onEnviomensajeError.emit("solo se acepta 9 digitos");
        }
       // console.log((this.me.nativeElement as HTMLInputElement).name);
    
      }else if (this.inputcontrol.errors?.['minlength']){
        this.onEnviomensajeError.emit("minimo de caracteres" + this.inputcontrol.errors?.['minlength'].requiredLength);
      }
      
      this.me.nativeElement.classList.add("is-invalid");//añade y remueve clase
      this.me.nativeElement.classList.remove("is-valid");
    }else{
      this.me.nativeElement.classList.add("is-valid");//añade y remueve clase
      this.me.nativeElement.classList.remove("is-invalid");
      this.onEnviomensajeError.emit(null);//porque no hay error no envia

    }
  }
}
