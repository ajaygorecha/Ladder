import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { LineChartModal } from '../models/line-chart.modal';
import { LadderApiService } from '../services/ladder-api.service';
Chart.register(...registerables);

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.sass'],
})
export class LineChartComponent implements OnInit {
  lineChartData: LineChartModal = new LineChartModal();
  constructor(private ladderApiService: LadderApiService) {}

  ngOnInit(): void {
    this.ladderApiService.getLineChartData().subscribe((data: any) => {
      let lineChartModalObj: LineChartModal;
      lineChartModalObj = data;
      this.lineChartData.labels = lineChartModalObj.labels;
      this.lineChartData.datasets = lineChartModalObj.datasets;
      this.initializeLineChart();
    });
  }

  initializeLineChart(): void {
    const lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: this.lineChartData.labels,
        datasets: this.lineChartData.datasets,
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
            },
          },
          title: {
            align: 'start',
            display: true,
            font: { weight: 'bolder', size: 20 },
            text: 'Chart Title',
            padding: {
              top: 20,
              bottom: 40,
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
