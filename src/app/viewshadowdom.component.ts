import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadowdom',
  template: `<p>I am encapsulated inside a Shadow DOM ViewEncapsulation.ShadowDom</p>`,
  styles: ['p { color:brown}'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewShadowdomComponent {
}
