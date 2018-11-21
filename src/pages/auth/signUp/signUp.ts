import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SubscriptionPage} from "../subscription/subscription";

@Component({
    selector: 'page-signUp',
    templateUrl: 'signUp.html',

})
export class SignUpPage {

    constructor(public navCtrl: NavController) {

    }


    signIn() {
        this.navCtrl.push(LoginPage);
    }

    signUp(){
        this.navCtrl.push(SubscriptionPage)
    }
}
