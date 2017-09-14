import { User } from '../../app/models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';
<<<<<<< HEAD
import { FirebaseServicePrivider } from '../../providers/firebase-service/firebase-service';
import { FirebaseObjectObservable} from 'angularfire2/database';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
=======

>>>>>>> YH

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user= { } as User;

  tipo: FirebaseObjectObservable<any>;


  constructor(
    private afAuth: AngularFireAuth,
  	public navCtrl: NavController,
<<<<<<< HEAD
  	public navParams: NavParams,
  	public auth : AuthProvider,
    public alertCtrl : AlertController,
    public firebaseService: FirebaseServicePrivider
=======
    public navParams: NavParams,
    public auth : AuthProvider,
    public alertCtrl : AlertController
>>>>>>> YH
    ) {

      this.tipo = this.firebaseService.getUserTipo('WceTUcZdrKQXaRYR6Q78r2TczSq2');
      this.tipo.subscribe(userSnapshot => {
        
        console.log('field name:  ', userSnapshot.tipo);
});
      

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
