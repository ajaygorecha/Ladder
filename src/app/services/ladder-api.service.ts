import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BarChartModal } from '../models/bar-chart.modal';
import { LineChartModal } from '../models/line-chart.modal';
import { ScoreChartModal } from '../models/score-chart.modal';

@Injectable({
  providedIn: 'root',
})
export class LadderApiService {
  private lineChartURL: string = 'http://localhost:3000/lineChart';
  private barChartURL: string = 'http://localhost:3000/barChart';
  private scoreChartURL: string = 'http://localhost:3000/scoreChart';
  constructor(private http: HttpClient) {}

  getLineChartData(): Observable<LineChartModal[]> {
    return this.http.get<LineChartModal[]>(this.lineChartURL);
  }

  getBarChartData(): Observable<BarChartModal[]> {
    return this.http.get<BarChartModal[]>(this.barChartURL);
  }

  getScoreChartDat(): Observable<ScoreChartModal[]> {
    return this.http.get<ScoreChartModal[]>(this.scoreChartURL);
  }
}
