import { Directive, HostListener, ElementRef, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input()
  defaultColor: string = 'white';

  @Input('highLight')
  highLightColor: string = 'yellow';

  @HostBinding('style.backgroundColor') 
  backgroundColor: string;

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') 
  onMouseOver() {
    this.backgroundColor = this.highLightColor;
  }
   
  @HostListener('mouseleave') 
  onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }
  
}
