import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from "ionic-angular";

@Component({
    selector: 'page-homeWork',
    templateUrl: 'homeWork.html'
})

export class HomeWorkPage implements OnInit {
    constructor(private navCtrl:NavController, private loadCtrl: LoadingController) { }

    ngOnInit(): void {
        let loading = this.loadCtrl.create({
            content:'加载中......'
        });
        loading.present();
        loading.dismiss();
    }
}