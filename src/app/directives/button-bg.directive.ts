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
    this.changeButtonBackground('none', 'rgb(119, 11, 29)');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.changeButtonBackground(this.defaultGradient, 'none');
  }

  // Вот в хостлистнере сверху и в ините снизу я пробовал задать color 'none', но в коде все равно сохраняется стиль bg-color для кнопки.
  // Спасало только то что bg-image имеет, так назовем это, выше приоритет (заливка просто под картинкой).
  // С color: transparent получается изначальный вариант с белым миганием кнопки.

  ngOnInit() {
    this.changeButtonBackground(this.defaultGradient, 'none')
  }

  changeButtonBackground(defaultGradient: string, color?:string):void {
    this.rend.setStyle(this.button.nativeElement, 'background-image', defaultGradient);
    if (color)
      this.rend.setStyle(this.button.nativeElement, 'background-color', color);
  }
}
