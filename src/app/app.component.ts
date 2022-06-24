import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = '';
  isHiddenBar: boolean = false;
  isHiddenLine: boolean = false;
  isHiddenScore: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.hideShowBarOrLineChart('score');
    }, 400);
  }

  hideShowBarOrLineChart(value: string) {
    if (value === 'score') {
      this.title = 'score chart';
      this.isHiddenBar = true;
      this.isHiddenLine = true;
      this.isHiddenScore = false;
    } else if (value === 'line') {
      this.title = 'line chart';
      this.isHiddenBar = true;
      this.isHiddenLine = false;
      this.isHiddenScore = true;
    } else if (value === 'bar') {
      this.title = 'bar chart';
      this.isHiddenBar = false;
      this.isHiddenLine = true;
      this.isHiddenScore = true;
    }
  }
}
