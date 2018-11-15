import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoggedinPage} from "../loggedin/loggedin";
import {AddSubscriptionsPage} from "../addSubscriptions/addSubscriptions";
import {MySubscriptionsPage} from "../mySubscriptions/mySubscriptions";


@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',

})
export class TabsPage {

    tab1Root = MySubscriptionsPage;
    tab2Root = AddSubscriptionsPage;

    constructor(public navCtrl: NavController) {

    }

    loggedin(){
        this.navCtrl.push(LoggedinPage)
    }

}
