import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SignUpPage} from "../signUp/signUp";
import {LoggedinPage} from "../loggedin/loggedin";
import {TabsPage} from "../tabs/tabs";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    // styleUrls: ['home.scss']
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    signUp(event, item) {
        this.navCtrl.push(SignUpPage, {
            item: item
        });
    }

    loggedin(event,item){
        this.navCtrl.push(TabsPage, {
            item: item
        });
    }
}
