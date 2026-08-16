import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular' + VERSION.major;

}

//data down: parent component tuong tac voi children component (input binding)
//event up: children component tuong tac voi parent component
