import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AboutService } from './about.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {
  datas: any;
  temp: string;
  constructor(public navCtrl: NavController, private serve: AboutService, private loadCtrl: LoadingController) {

  }

  accordion(index, temp): void {
    this.temp = temp + index;
  }

  removeItem(index: any): void {
    
  }

  ngOnInit(): void {
    let loading = this.loadCtrl.create({
      content: '加载中......'
    });
    loading.present();
    this.serve.getData().subscribe(data => {
      console.log(data);
      this.datas = data;
    })
    loading.dismiss();
  }

}
