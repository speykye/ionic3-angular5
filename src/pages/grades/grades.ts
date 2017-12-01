import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

declare var echarts;

@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html'
})
export class GradesPage implements OnInit {
  @ViewChild('container') container: ElementRef;
  chart: any;

  constructor(public navCtrl: NavController, private loadCtrl: LoadingController) {

  }

  ionViewDidEnter(): void {
    let ctx = this.container.nativeElement;
    this.chart = echarts.init(ctx);
    this.chart.setOption({
      color: ['#3398DB'],
      title: {
        text: '***的成绩'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        show: true,
        width: '80%',
        height: '250px',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'line',
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    })
  }

  ngOnInit(): void {
    let loading = this.loadCtrl.create({
      content: '加载中......'
    });
    loading.present();
    this.ionViewDidEnter();
    loading.dismiss();
  }

}
