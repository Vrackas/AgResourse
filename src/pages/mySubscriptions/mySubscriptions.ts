import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-mySubscriptions',
    templateUrl: 'mySubscriptions.html',
})
export class MySubscriptionsPage {

    list: any = [
            {
                title: 'All Subscriptions',
                img: 'allSubscriptions'

            },
            {
                title: 'Daily',
                img: 'daily'
            },
            {
                title: 'AGResource LATAM',
                img: 'latam'
            },
            {
                title: 'Climate Impact',
                img: 'climate'
            }
    ];


    constructor(public navCtrl: NavController) {

    }


}
