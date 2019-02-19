import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewNoneComponent } from './viewnone.component';
import { ViewEmulatedComponent } from './viewemulated.component';
import { ViewShadowdomComponent } from './viewshadowdom.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewNoneComponent,
    ViewEmulatedComponent,
    ViewShadowdomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
