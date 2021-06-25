import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBhNNzeu8KnPvTqdx__qbWTPPO65r2yBjE",
  authDomain: "prueba-chat-2578c.firebaseapp.com",
  databaseURL: "https://prueba-chat-2578c-default-rtdb.firebaseio.com",
  projectId: "prueba-chat-2578c",
  storageBucket: "prueba-chat-2578c.appspot.com",
  messagingSenderId: "505601280507",
  appId: "1:505601280507:web:c985b558500f71b516e35e",
  measurementId: "G-CR4RSDGE3K"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.initializeApp(config);
  }
}
