import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormatUser } from './format-user-pipes';
import { AdultPipe } from './adult.pipes';

@NgModule({
  declarations: [
    AppComponent, FormatUser, AdultPipe
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// FormModule: làm việc với form directive
