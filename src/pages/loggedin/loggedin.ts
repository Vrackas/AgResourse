import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AddSubscriptionsPage} from "../addSubscriptions/addSubscriptions";
import {MySubscriptionsPage} from "../mySubscriptions/mySubscriptions";
import {TabsPage} from "../tabs/tabs";


@Component({
    selector: 'page-loggedin',
    templateUrl: 'loggedin.html',

})
export class LoggedinPage {

    constructor(public navCtrl: NavController) {

    }

    // mySubscriptions(){
    //     this.navCtrl.push(MySubscriptionsPage)
    // }
    //
    // addSubscriptions(){
    //     this.navCtrl.push(TabsPage.tab2Root);
    // }

    back(){
        console.log('test');
        this.navCtrl.pop()
    }


}
