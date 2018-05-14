import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, App } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule,MatCardModule, MatIconModule } from '@angular/material';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AjouterPage } from '../pages/ajouter/ajouter';
import { Database } from '../providers/database/database';
import { HomePage } from '../pages/home/home';

@NgModule({
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Database
  ]
})
export class AppModule {}
