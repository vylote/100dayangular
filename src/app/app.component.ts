import { Component, ElementRef, QueryList, VERSION, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Truy vấn Component Con để lấy thực thể ToggleComponent
  @ViewChildren(ToggleComponent) toggleComps: QueryList<ToggleComponent>;

  // Truy vấn thẻ HTML thông thường để lấy đối tượng ElementRef bọc ngoài HTMLDivElement
  @ViewChild('chartContainer') container: ElementRef<HTMLDivElement>;

  @ViewChild('toggleBtn', {static: true}) toggleBtn: ElementRef<HTMLButtonElement>

  @ViewChild('nameInput', {static: true}) nameInput: ElementRef<HTMLInputElement>

  name = 'Angular' + VERSION.major;
  checked = false
  ShowLast = true

  ngAfterViewInit() {
    this.toggleComps.changes.subscribe(console.log)
    console.log(this.container)
  }

  ngOnInit() {
    console.log(this.container)
  }
}
