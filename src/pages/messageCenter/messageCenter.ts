import { Component, OnInit } from '@angular/core';
import { NavParams, LoadingController } from "ionic-angular";

@Component({
    selector: 'page-messageCenter',
    templateUrl: 'messageCenter.html'
})

export class MessageCenterPage implements OnInit {
    id: any;
    constructor(private navParams: NavParams, private loadCtrl: LoadingController) {

    }

    ngOnInit(): void {
        let loading = this.loadCtrl.create({
            content: '加载中......'
        });
        loading.present();
        this.id = this.navParams.get('id');
        console.log(this.id);
        loading.dismiss();
    }
}