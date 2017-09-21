import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';



/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private afAuth :  AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

      // Registro de usuario
  registerUser(email:string, password:string){
    return this.afAuth.auth.createUserWithEmailAndPassword( email, password)
    .then((res)=>{
     // El usuario se ha creado correctamente. 
    })
    .catch(err=>Promise.reject(err))
 }

  // Login de usuario
 loginUser(email:string, password:string){
   return this.afAuth.auth.signInWithEmailAndPassword(email, password)
     .then(user=>Promise.resolve(user))
     .catch(err=>Promise.reject(err))
 }

 // Devuelve la session
 get Session(){
  return this.afAuth.authState;
 }

}
