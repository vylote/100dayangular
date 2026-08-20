import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newDate = new Date()

  user = {
    name: "vlt",
    age: 21,
    class: "CNTT4"
  }

  format(user) {
    console.log("run", user)
    return user.name+" "+user.age+" "+user.class
  }

  users = [
  {
    name: "Tiep Phan",
    age: 30
  },
  {
    name: "Trung Vo",
    age: 28
  },
  {
    name: "Chau Tran",
    age: 29
  },
  {
    name: "Tuan Anh",
    age: 16
  }
];
}
