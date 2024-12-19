import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo]',
  standalone: true
})
export class DemoDirective {

  constructor(private obj : ElementRef)
  {
    console.log("Inside Directive constructor");
  }
  @HostListener('mouseenter') onmouseenter()
  {
      this.obj.nativeElement.style.background = 'yellow';
  }

  @HostListener('mouseleave') onmouseleave()
  {
      this.obj.nativeElement.style.background = 'green';
  }
}
