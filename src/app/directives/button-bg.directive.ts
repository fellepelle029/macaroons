import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[ButtonBg]'
})

export class ButtonBgDirective implements OnInit{

  defaultGradient: string = 'linear-gradient(0deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';

  constructor(private button: ElementRef,
              private rend: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.changeButtonBackground('none');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.changeButtonBackground(this.defaultGradient);
  }

  ngOnInit() {
    this.changeButtonBackground(this.defaultGradient)
    this.rend.setStyle(this.button.nativeElement, 'background-color', 'rgb(119, 11, 29)');

  }

  changeButtonBackground(defaultGradient: string):void {
    this.rend.setStyle(this.button.nativeElement, 'background-image', defaultGradient);
  }
}
