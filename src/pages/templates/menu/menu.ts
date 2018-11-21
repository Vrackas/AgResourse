import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {LoginPage} from "../../auth/login/login";


@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',

})
export class MenuPage {

    constructor(public navCtrl: NavController) {

    }


    logout() {
        this.navCtrl.push(LoginPage)
    }

    mySubscriptions(num) {
        this.navCtrl.push(TabsPage, {
            tabNum: num
        })
    }

    addSubscriptions(num) {
        this.navCtrl.push(TabsPage, {
            tabNum: num
        });
    }

    back() {
        this.navCtrl.pop()
    }


}
