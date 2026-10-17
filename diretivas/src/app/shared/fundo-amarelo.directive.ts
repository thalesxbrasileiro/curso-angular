import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // selector: '[fundoAmarelo]'
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {
    // Não é recomendado fazer com ElementRef (linha 15) por questões de segurança.
    //console.log(this._elementRef)
    // this._elementRef.nativeElement.style.backgroundColor='yellow';
    
    this._renderer.setStyle(
      this._elementRef.nativeElement, 
      'backgroundColor', 
      'yellow')
   }

}
