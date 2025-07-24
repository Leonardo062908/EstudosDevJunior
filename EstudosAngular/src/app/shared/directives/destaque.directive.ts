import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDestaque]',
})
export class DestaqueDirective implements OnInit {
  @Input() appDestaque: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appDestaque) {
      this.el.nativeElement.style.backgroundColor = '#f9f9c5';
    }
  }
}
