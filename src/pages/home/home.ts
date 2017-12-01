import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MessageCenterPage } from '../messageCenter/messageCenter';
import { HomeWorkPage } from '../homeWork/homeWork';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  pushPage: any;
  constructor(public navCtrl: NavController, private loadCtrl: LoadingController) {
    this.pushPage = HomeWorkPage;
  }

  goNext(): void {
    this.navCtrl.push(MessageCenterPage, {
      id: 1
    });
  }

  ngOnInit(): void {
    let loading = this.loadCtrl.create({
      content: '加载中......'
    });
    loading.present();
    loading.dismiss();
  }
}
