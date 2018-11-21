import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';



@NgModule({
    declarations: [

    ],
    imports: [
        BrowserModule,

    ],
    bootstrap: [IonicApp],
    entryComponents: [

    ],
    providers: [

        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class SharedModule {
}
