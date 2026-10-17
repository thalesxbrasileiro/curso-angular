import { Directive, HostListener, ElementRef, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') 
  onMouseOver() {
    this.backgroundColor = this.highLightColor;
  }
   
  @HostListener('mouseleave') 
  onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }
  
  @HostBinding('style.backgroundColor') 
  backgroundColor: string;

  @Input()
  defaultColor: string = 'white';

  @Input('highLight')
  highLightColor: string = 'yellow';

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    
  }
  
}
