import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';



import {LoginPage} from "./login/login";
import {SignUpPage} from "./signUp/signUp";
import {SubscriptionPage} from "./subscription/subscription";



@NgModule({
    declarations: [
        LoginPage,
        SubscriptionPage,
        SignUpPage,

    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(LoginPage)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        LoginPage,
        SubscriptionPage,
        SignUpPage,

    ],
    providers: [


        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AuthModule {
}
