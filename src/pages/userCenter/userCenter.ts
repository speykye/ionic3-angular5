import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

@Component({
    selector: 'page-userCenter',
    templateUrl: 'userCenter.html'
})

export class UserCenterPage implements OnInit {
    signature: any;
    name: string;
    edit: boolean;
    constructor(public navCtrl: NavController, private navParams: NavParams, private toastCtrl: ToastController, private loadCtrl: LoadingController) {
        

    }

    submitInfo(): void {
        this.presentToast();
    }

    presentToast(): void {
        let toast = this.toastCtrl.create({
            message: '提交成功！',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }

    ngOnInit(): void {
        let loading = this.loadCtrl.create({
            content: '加载中',
        })
        loading.present();
        this.signature = this.navParams.get('signature');
        console.log(this.signature);
        this.name = this.navParams.get('name');
        console.log(this.name);
        loading.dismiss();
    }
}