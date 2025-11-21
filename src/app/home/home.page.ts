import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,  IonText, IonCol, IonGrid, IonRow, IonImg, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, 
    IonTitle, IonContent, 
    IonText, IonCol, IonGrid, IonRow, IonImg,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
  
  ],
})

export class HomePage {
  constructor() {}
  
  message: string | null=null;

  showMessage(){
    this.message='Mi primera app con Ionic :D, Soy feli'
  }
}


/*
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: 
  [IonHeader, IonToolbar, 
    IonTitle, IonContent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HomePage {
  constructor() {}
  message: string | null = null;
  showMessage() {
    this.message = '¡Felicidades! Has creado tu primera app con ionic';
  }
}

*/