import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FlexComponent } from './flex.component';
import { ToggleComponent } from './toggle/toogle.component';
@NgModule({
  declarations: [
    AppComponent,
    FlexComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// FormModule: làm việc với form directive