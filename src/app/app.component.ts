import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interpolated text';

  @Output()
  donkeyTwo = 'This text is property bound';

  // scream(s : string) {
  //   console.log("Ahhhhh!" + s);
  // }
}
