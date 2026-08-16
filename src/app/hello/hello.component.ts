import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent {
  user = {
    name: 'Tiep Phan',
    age: 14,
  };

  @Input() test: String

  ngOnInit() {
    console.log('hello init')
  }

  ngOnDestroy() {
    console.log('hello destroy')
  }
}
