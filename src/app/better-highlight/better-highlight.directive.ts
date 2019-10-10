import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') textColor: string = 'black';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'yellow');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // Without HostBinding
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');

     // With HostBinding
     this.backgroundColor = this.highlightColor;
     this.textColor = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // Without HostBinding
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');

     // With HostBinding
     this.backgroundColor = this.defaultColor;
     this.textColor = 'black';
  }
}
