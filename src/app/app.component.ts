import { Component, Output } from '@angular/core';

interface User {
  name: string;
  id: number;
};

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

type MyType = string | number;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interpolated text';
  itemImageUrl = '../assets/me.jpeg'
  isUnchanged = true;
  user!: User;

  constructor() {
    this.user = new UserAccount("Ian", 0);
    console.log(typeof foo1("hello"));
    console.log(typeof foo1(2000));
  }

  @Output()
  donkeyTwo = 'This text is property bound';

  onClickMe() {
    console.log("HELLO !");
  }

}

function foo1(arg0: MyType): MyType {
  if (typeof arg0 == "string") {
    return "string";
  }
  return 100;
}
