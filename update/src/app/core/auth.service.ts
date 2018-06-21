// import { Injectable } from '@angular/core';
// import * as firebase from 'firebase';

// @Injectable()
// export class AuthService {


//   authState: FirebaseAuthState = null;

//     constructor(private af: AngularFire,
//       private db: AngularFireDatabase,
//       private router: Router) {

//       af.auth.subscribe((auth) => {
//         this.authState = auth;
//       });
//         emailSignUp(credentials: EmailPasswordCredentials): firebase.Promise<FirebaseAuthState> {
//    return this.af.auth.createUser(credentials)
//      .then(() => console.log("success"))
//      .catch(error => console.log(error));
//  }

//  emailLogin(credentials: EmailPasswordCredentials): firebase.Promise<FirebaseAuthState> {
//     return this.af.auth.login(credentials,
//       { provider: AuthProviders.Password,
//         method: AuthMethods.Password
//        })
//       .then(() => console.log("success"))
//       .catch(error => console.log(error));
//  }

// resetPassword(email: string) {
//   var auth = firebase.auth();

//   return auth.sendPasswordResetEmail(email)
//     .then(() => console.log("email sent"))
//     .catch((error) => console.log(error))
// }

//     }

//     export class EmailPasswordCredentials {
//     email: string;
//     password: string;
//   }

// }

