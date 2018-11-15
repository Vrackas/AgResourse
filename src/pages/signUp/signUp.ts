import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {SubscriptionPage} from "../subscription/subscription";

@Component({
    selector: 'page-signUp',
    templateUrl: 'signUp.html',

})
export class SignUpPage {

    constructor(public navCtrl: NavController) {

    }

    signIn() {
        this.navCtrl.pop(HomePage);
    }

    signUp(){
        this.navCtrl.push(SubscriptionPage)
    }
}
