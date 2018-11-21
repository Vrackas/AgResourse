import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';
import {CartPage} from "./cart/cart";
import {TabsModule} from "./tabs/tabs.module";
import {MenuPage} from "./menu/menu";



@NgModule({
    declarations: [
        CartPage,
        MenuPage
    ],
    imports: [
        BrowserModule,
        TabsModule,
        IonicStorageModule.forRoot(),
        IonicModule.forRoot(TabsModule)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        CartPage,
        MenuPage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class TemplatesModule {
}
