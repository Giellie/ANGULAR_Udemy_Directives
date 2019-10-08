import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.backgroundColor = 'green';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'yellow');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // Without HostBinding
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');

     // With HostBinding
     this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // Without HostBinding
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');

     // With HostBinding
     this.backgroundColor = 'red';
  }
}
