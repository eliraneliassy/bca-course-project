import { Directive, HostListener, Output, EventEmitter, Inject } from '@angular/core';


@Directive({
  selector: '[appInfiteScroll]'
})
export class InfiteScrollDirective {

  @Output() loadMore: EventEmitter<void> = new EventEmitter<void>();

  @HostListener('window:scroll')
  onScroll() {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    const distance = (Math.max(bodyHeight - (scrollPosition + windowSize), 0));

    if (distance <= 50) {
      this.loadMore.emit();
    }
  }

  constructor() { }

}
