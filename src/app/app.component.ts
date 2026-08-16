import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular' + VERSION.major;

  isDanger = false;
  isWarning = false;
  classes = "box red-border yellow-background";
}
