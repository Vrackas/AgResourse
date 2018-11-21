import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SignUpPage} from "../signUp/signUp";
import {TabsPage} from "../../templates/tabs/tabs";


@Component({
    selector: 'page-login',
    templateUrl: 'login.html',

})
export class LoginPage {

    constructor(public navCtrl: NavController) {

    }

    signUp(event, item) {
        this.navCtrl.push(SignUpPage, {
            item: item
        });
    }

    signIn(event,item){
        this.navCtrl.push(TabsPage, {
            item: item
        });
    }
}
