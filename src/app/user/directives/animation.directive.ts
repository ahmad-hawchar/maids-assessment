import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimation]',
  standalone: false
})
export class AnimationDirective {
  //this directives changes the position of the list item on hover by using transform translate in css
  //it also adds a box shadow. and it brings the element back to its original place on mouse out and 
  //it removes the box shadow
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'box-shadow 250ms ease-in-out, transform 250ms ease-in-out');
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'rgba(18, 18, 19, 0.2) 0px 7px 29px 0px');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(5px, -5px)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(0, 0)');
  }
}
