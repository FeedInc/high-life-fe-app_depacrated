import { Component, ElementRef, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart-dynamic',
  templateUrl: './app-chart-dynamic.component.html',
  styleUrls: ['./app-chart-dynamic.component.scss']
})
export class AppChartDynamicComponent implements OnInit, AfterViewInit {
  @Input() dataChart: any;
  @Input() idNumber?: number;
  @Input() type?: string;
  public idChart: string = "";
  newIdChart: string = "";
  chart: any;
  // @ViewChild("chart") chart: ElementRef | null = null;

  constructor() {
    Chart.register(...registerables);
  }
  ngOnInit() {

    console.log(document);
    this.newIdChart = `myChart${this.idNumber}`
    console.log("id on init", this.newIdChart);
  }
  ngAfterViewInit(): void {
    if(this.dataChart?.dataConfig?.type == "bar") {
      let element = document!.getElementById(this.newIdChart);
      element!.style.height = "400px";
      element!.style.width = "400px";
    }

    this.chart = new Chart(this.newIdChart, this.dataChart.dataConfig);
  }

  generateChart() {

  }

}
