
import { Component, NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, App,} from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule,MatCardModule, MatIconModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AjouterPage } from '../pages/ajouter/ajouter';
import { Database } from '../providers/database/database';
import { HomePage } from '../pages/home/home';
import { person } from '../Blacklist/person';
import { Table } from '../pages/Injectables/Injectables';

@NgModule({
  declarations: [
    MyApp,
    AjouterPage,
    HomePage
    
  ],
  imports: [
    HttpModule,
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
    AjouterPage
  ],
  providers: [
    Database,
    person,
    StatusBar,
    SplashScreen,
   
  ]
})
export class AppModule {}
