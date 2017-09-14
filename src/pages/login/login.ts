import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FirebaseServicePrivider } from '../../providers/firebase-service/firebase-service';
import { FirebaseObjectObservable} from 'angularfire2/database';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user= { email : '', password : ''};

  tipo: FirebaseObjectObservable<any>;


  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public auth : AuthProvider,
    public alertCtrl : AlertController,
    public firebaseService: FirebaseServicePrivider
    ) {

      this.tipo = this.firebaseService.getUserTipo('WceTUcZdrKQXaRYR6Q78r2TczSq2');
      this.tipo.subscribe(userSnapshot => {
        
        console.log('field name:  ', userSnapshot.tipo);
});
      

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin(){
    
    this.firebaseService

  }

  login() 
{
    this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
      }
    )
     .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }


}
