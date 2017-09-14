import { User } from '../../app/models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user= { } as User;

  constructor(
    private afAuth: AngularFireAuth,
  	public navCtrl: NavController,
    public navParams: NavParams,
    public auth : AuthProvider,
    public alertCtrl : AlertController
    ) {
  }

 
//creacion de usuario (esta correcto)
  signin(){
    this.auth.registerUser(this.user.email,this.user.password)
    .then((user) => {
      // El usuario se ha creado correctamente
      let alert = this.alertCtrl.create({
        title: 'Notifiación',
        subTitle: "Te has unido con éxito a nuestra comunidad MegaCity",
        buttons: ['Aceptar']
      });
      alert.present();
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })

  }
//autenticar
  login(user: User) 
{
 try{ 
    const result= this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password ) 
   this.navCtrl.push('HomeClientePage');
  }
 catch (e) {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: e.message,
    buttons: ['Aceptar']
  });
  alert.present();
 }
}
}
