import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  mensajesdeErrores={
    errornombre:"",
    errorcorreo:"",
    errortelefono:"",
    errorasunto:"",
    errormensaje:""
  };
  //1.variable formulario
  formRegistro!:FormGroup;
  //saludo="hola como";

  //2.constructor
  constructor(private formRegistrobuilder:FormBuilder){
  }
  //3.implementamos el oninit
  ngOnInit(): void {
    //4.construimos los inputs del formulario en un grupo
    this.formRegistro= this.formRegistrobuilder.group({

    //7.llamamos por el formcontrolname
      
    nombre:['',
      [
        Validators.required,

      ]
    ],
    correo:['',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]
    ],
    telefono:['',
      [
        Validators.required,
        Validators.pattern('^[0-9]{9}')
      ]
    ],
    asunto:['',
      [
        Validators.required,
        Validators.minLength(5)
      ]
    ],
    mensaje:['',
      [
      Validators.required,
      Validators.minLength(10)
      ]
    ],
    });
    
  }
  //obtiene el nombre del control  lo devuelve como  formcontrol
  getControl(nombre:string){
    return this.formRegistro.get(nombre) as FormControl; 
  }
  enviar():void{
    Swal.fire({
      icon: 'success',
      title: 'Datos Enviados',
    })

  }
}
