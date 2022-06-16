import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LineChartModal } from '../models/line-chart.modal';

@Injectable({
  providedIn: 'root',
})
export class LadderApiService {
  private lineChartURL: string = 'http://localhost:3000/lineChart';
  private barChartURL: string = 'http://localhost:3000/barChart';
  constructor(private http: HttpClient) {}

  getLineChartData(): Observable<LineChartModal[]> {
    return this.http.get<LineChartModal[]>(this.lineChartURL);
  }

  getBarChartData(): Observable<LineChartModal[]> {
    return this.http.get<LineChartModal[]>(this.lineChartURL);
  }
}
