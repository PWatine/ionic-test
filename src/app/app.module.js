var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AjouterPage } from '../pages/ajouter/ajouter';
import { Database } from '../providers/database/database';
import { HomePage } from '../pages/home/home';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                AjouterPage,
                HomePage
            ],
            imports: [
                BrowserModule,
                MatButtonModule,
                MatCheckboxModule,
                MatCardModule,
                MatIconModule,
                MatInputModule,
                FormBuilder,
                FormGroup,
                FormControl,
                FormGroupDirective,
                NgForm,
                Validators,
                MatFormFieldModule,
                IonicModule.forRoot(MyApp),
                IonicStorageModule.forRoot()
            ],
            bootstrap: [IonicApp],
            exports: [
                MatButtonModule,
                MatCheckboxModule,
                MatCardModule,
                MatIconModule,
                MatInputModule,
                FormBuilder,
                FormGroup,
                FormControl,
                FormGroupDirective,
                NgForm,
                Validators,
                MatFormFieldModule
            ],
            entryComponents: [
                MyApp,
                HomePage,
                AjouterPage,
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                Database
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map