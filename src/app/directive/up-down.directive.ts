import {Directive, ElementRef, HostListener, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[upDown]'
})
export class UpDownDirective {

  // active: boolean = false

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }


  @HostListener("click")
  toggleData() {
    debugger
    // const nested = this.elementRef.nativeElement.parentElement?.querySelector(".nested")
    // if (nested.classList.contains("active")) {
    //   nested.classList.remove("active")
    //   this.elementRef.nativeElement.classList.remove("caret-down");
    // }else {
    //   this.renderer.addClass(nested, "active")
    //   this.renderer.addClass(this.elementRef.nativeElement, "caret-down");
    // }
    if(this.elementRef.nativeElement.classList.contains("caret-down")) {
      this.renderer.removeClass(this.elementRef.nativeElement, "caret-down");
    }else {
      this.renderer.addClass(this.elementRef.nativeElement, "caret-down");
    }

  }


}
