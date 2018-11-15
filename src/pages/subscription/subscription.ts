import {Component, ViewChild } from '@angular/core';
import {NavController, Slides } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";




@Component({
    selector: 'page-subscription',
    templateUrl: 'subscription.html',

})
export class SubscriptionPage {

    constructor(public navCtrl: NavController) {

    }

    skip(){
        this.navCtrl.push(TabsPage)
    }

}
