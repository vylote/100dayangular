import { Component, ElementRef, Input, QueryList, VERSION, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navs = ['Active', 'Link 1', 'Link 2']
}
