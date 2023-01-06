import { Directive,ElementRef,HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appValidacion]'
})
export class ValidacionDirective implements OnInit {

  constructor(private me:ElementRef) {

   }
@HostListener('click') onMouseEnter(){
    console.log('entro al elemento' );
    this.me.nativeElement.style.backgroundColor = 'yellow';

  }
  ngOnInit(): void {
    console.log(this.me);
    this.me.nativeElement.style.backgroundColor = "RED";
  
  }
}
