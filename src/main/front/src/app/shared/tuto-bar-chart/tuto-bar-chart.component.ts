import {Component, OnInit, Input, ViewChild, ElementRef, OnChanges, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'tuto-bar-chart',
  templateUrl: 'tuto-bar-chart.component.html',
  styleUrls: ['tuto-bar-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TutoBarChartComponent implements OnInit, OnChanges  {

  @Input() private data: Array<any>;

  @ViewChild('tutochart') private chartContainer: ElementRef;

  private margin: any = { top: 20, bottom: 20, left: 20, right: 20};
  private width: number;
  private height: number;
  private newData = [30,86,156,122,454,65];

  constructor() { }

  ngOnInit() {
    this.createChart();
  }

  ngOnChanges() {

  }

  createChart() {
    const element = this.chartContainer.nativeElement;

    d3.select(element)
      .selectAll("div")
      .data(this.newData)
      .enter().append("div")
      .style("width", function(d) { return d * 10 + "px"; })
      .text(function(d) { return d; });
  }
}
