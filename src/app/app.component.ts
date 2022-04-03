import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ota-insight-test';

  squares: number[] = [];

  addSquare() {
    this.squares.push(this.squares.length);
  }
}
