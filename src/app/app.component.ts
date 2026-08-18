import { Component, ElementRef, Input, QueryList, VERSION, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'VyLote'
  questions = {
    question1: true,
    question2: false
  }
}
