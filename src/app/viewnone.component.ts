import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none',
  template: `<p>I am not encapsulated and in blue
             (ViewEncapsulation.None) </p>`,
  styles: ['p { color:blue}'],
  encapsulation: ViewEncapsulation.None
})
export class ViewNoneComponent {
}
