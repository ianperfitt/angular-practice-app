import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interpolated text';
  itemImageUrl = '../assets/me.jpeg'
  isUnchanged = true;

  @Output()
  donkeyTwo = 'This text is property bound';

  onClickMe() {
    console.log("HELLO !");
  }

}
