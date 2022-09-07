import { Directive, ElementRef, HostListener, Renderer2, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Directive to enhance date input 
 * with automatic conversion from number to date
 */
@Directive({
  selector: 'input[type=date][formControlName]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateConverterDirective),
    multi: true
  }]
})
export class DateConverterDirective implements ControlValueAccessor {
  @HostListener('input', ['$event.target.valueAsNumber']) onInput = (_: any) => { };

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  writeValue(date: number): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'valueAsDate', new Date(date));
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onInput = (value: number) => {
      fn(value)
    }
  }

  registerOnTouched(fn: any): void { }

}