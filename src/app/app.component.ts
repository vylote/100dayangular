import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular100day';
  name = 'Angular' + VERSION.major

  //data binding
  inputType ='text'

  //event binding
  handler(event) {
    console.log('click', event)
  }

  user = {
    name: 'Vy',
    age: 21
  };
}

/* TS class (AppComponent) không biết th TS decorator là gì, ví dụ là nếu thêm private vào trước user thì templateUrl: k 
thể gọi dc các att của user */