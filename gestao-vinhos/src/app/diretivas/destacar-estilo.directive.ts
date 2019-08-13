import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[destacarEstilo]'
})
export class DestacarEstiloDirective {

  @HostListener('mouseenter') onmouseenter(){
    this.transformar('bold', 'uppercase');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.transformar();
  }

  private transformar(fontWeight: string = null, textTransform:string = null){
    this.elementRef.nativeElement.style.fontWeight = fontWeight;
    this.elementRef.nativeElement.style.textTransform = textTransform;
  }



  constructor(private elementRef: ElementRef) {
  }

}
