import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {SignUpPage} from '../pages/signUp/signUp';
import {SubscriptionPage} from "../pages/subscription/subscription";
import {LoggedinPage} from "../pages/loggedin/loggedin";
import {TabsPage} from "../pages/tabs/tabs";
import {MySubscriptionsPage} from "../pages/mySubscriptions/mySubscriptions";
import {AddSubscriptionsPage} from "../pages/addSubscriptions/addSubscriptions";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        SignUpPage,
        SubscriptionPage,
        LoggedinPage,
        TabsPage,
        MySubscriptionsPage,
        AddSubscriptionsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        SignUpPage,
        SubscriptionPage,
        LoggedinPage,
        TabsPage,
        MySubscriptionsPage,
        AddSubscriptionsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
