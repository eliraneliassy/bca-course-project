import { Directive, ElementRef, AfterViewInit, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit {

  @Input() appChangeColor = 'red';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2) {
    console.log(this.element);
  }

  ngAfterViewInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.appChangeColor;
    this.renderer
      .setStyle(this.element.nativeElement, 'background-color', this.appChangeColor);
  }

}
