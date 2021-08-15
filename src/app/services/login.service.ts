import { Injectable } from '@angular/core';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  signinUser() {

  }

  signUpUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(()=> {
        console.log('connecté');
        resolve(true);
        
      })
      .catch((error)=> {
        reject(error);
      })
    })
  }
}
