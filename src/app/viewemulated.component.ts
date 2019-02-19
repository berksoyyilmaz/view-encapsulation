import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulated',
  template: `<p>I am now encapsulated using ViewEncapsulation.Emulated</p>`,
  styles: ['p { color:red}'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewEmulatedComponent {
}
