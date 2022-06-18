import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { BarChartModal } from '../models/bar-chart.modal';
import { LadderApiService } from '../services/ladder-api.service';
Chart.register(...registerables);

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.sass'],
})
export class BarChartComponent implements OnInit {
  lineChartData: BarChartModal = new BarChartModal();
  constructor(private ladderApiService: LadderApiService) {}

  ngOnInit(): void {
    this.ladderApiService.getLineChartData().subscribe((data: any) => {
      let barChartModalObj: BarChartModal;
      barChartModalObj = data;
      this.lineChartData.labels = barChartModalObj.labels;
      this.lineChartData.datasets = barChartModalObj.datasets;
      this.initializeBarChart();
    });
  }

  initializeBarChart(): void {
    const barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: this.lineChartData.labels,
        datasets: this.lineChartData.datasets,
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            labels: { usePointStyle: true, pointStyle: 'circle' },
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
