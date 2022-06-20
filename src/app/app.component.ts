import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ladder';
  isHiddenBar: boolean = false;
  isHiddenLine: boolean = false;

  hideShowBarOrLineChart(value: string) {
    if (value === 'line') {
      this.isHiddenLine = false;
      this.isHiddenBar = true;
    } else if (value === 'bar') {
      this.isHiddenBar = false;
      this.isHiddenLine = true;
    } else if (value === '') {
      this.isHiddenBar = false;
      this.isHiddenLine = false;
    } else if (value === 'score') {
      this.isHiddenBar = true;
      this.isHiddenLine = true;
    }
  }
}
