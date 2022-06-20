import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ScoreChartModal } from '../models/score-chart.modal';
import { LadderApiService } from '../services/ladder-api.service';

@Component({
  selector: 'score-chart',
  templateUrl: './score-chart.component.html',
  styleUrls: ['./score-chart.component.sass'],
})
export class ScoreChartComponent implements OnInit {
  @Output() visibleChart: EventEmitter<string> = new EventEmitter<string>();

  isHiddenScore: boolean = false;
  lineChartData: ScoreChartModal = new ScoreChartModal();
  leftData1: string = '';
  leftData2: string = '';
  leftData3: string = '';
  leftData4: string = '';
  rightData1: string = '';
  rightData2: string = '';
  rightData3: string = '';
  rightData4: string = '';
  rightData5: string = '';
  calculated: string = 'Score-60% tile-77';
  constructor(private ladderApiService: LadderApiService) {}

  ngOnInit(): void {
    this.ladderApiService.getScoreChartDat().subscribe((data: any) => {
      this.leftData1 = data.leftData1;
      this.leftData2 = data.leftData2;
      this.leftData3 = data.leftData3;
      this.leftData4 = data.leftData4;
      this.rightData1 = data.rightData1;
      this.rightData2 = data.rightData2;
      this.rightData3 = data.rightData3;
      this.rightData4 = data.rightData4;
      this.rightData5 = data.rightData5;
    });
  }

  VisibleChart(value: string) {
    if (value === 'score' || value === '') {
      this.isHiddenScore = false;
    } else {
      this.isHiddenScore = true;
    }

    this.visibleChart.emit(value);
  }
}
