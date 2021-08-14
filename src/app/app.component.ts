
import { Component} from '@angular/core';
import firebase from 'firebase/app';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartodo';


  

  constructor() {

    // const firebaseConfig = {
    //   apiKey: "AIzaSyDLbqB4_qtLttwGGmY4u4xnJ6o7vDxiE-Q",    
    //   authDomain: "angulartodo-e4730.firebaseapp.com",    
    //   projectId: "angulartodo-e4730",    
    //   storageBucket: "angulartodo-e4730.appspot.com",    
    //   messagingSenderId: "201673410774",    
    //   appId: "1:201673410774:web:d5cf16609d938b18f3e177"    
    // };
    // firebase.initializeApp(firebaseConfig)
  }
  ngOnInit() {
   
  }


  

}
