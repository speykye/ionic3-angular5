import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { UserCenterPage } from '../userCenter/userCenter';
import { ContectService } from './contact.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers:[ContectService]
})
export class ContactPage implements OnInit {
  userName: string;
  signature: string;
  params: Object;
  pushPage: any;
  constructor(public navCtrl: NavController,private serve: ContectService, private loadCtrl: LoadingController) {
    this.pushPage = UserCenterPage;
  }

  ngOnInit(){
    let loading = this.loadCtrl.create({
      content: '加载中......'
    });
    loading.present();
    this.serve.getData(this.params).subscribe(data => {
      const results = data.results;
      console.log(results);
      this.userName = results.name;
      this.signature = results.signature;
      this.params = results;
    });
    loading.dismiss();
  }

}
