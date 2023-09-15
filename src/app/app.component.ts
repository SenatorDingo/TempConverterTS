import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
fahrenheitValue: number = 0;
celsiusValue: number = 0;
convertFahrenheit(value: string): void {
  this.fahrenheitValue = Number(value);
  this.celsiusValue = ((this.fahrenheitValue - 32) * 5) / 9;
}
convertCelsius(value: string) {
  this.celsiusValue = Number(value);
  this.fahrenheitValue = ((this.celsiusValue * 9) / 5) + 32;
}
  title = 'TempConverter';
}
