import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Factura } from '../../app/models/factura';
import firebase from 'firebase';

/**
 * Generated class for the SubirFacturaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subir-factura',
  templateUrl: 'subir-factura.html',
})
export class SubirFacturaPage {

  public uid;
  factura = {} as Factura;
  infoFactura$: FirebaseListObservable<Factura[]>
  public base64Image;
  alertCtrl: AlertController;
  constructor(public navCtrl: NavController, public navParams: NavParams, alertCtrl: AlertController, private database: AngularFireDatabase) {
    this.base64Image = this.navParams.get("base64Image");
    this.uid = this.navParams.get("uid");
    this.alertCtrl = alertCtrl;
    this.infoFactura$ = this.database.list('factura');
  }

  ionViewDidLoad() {
    this.base64Image = this.navParams.get("base64Image");
    this.uid = this.navParams.get("uid");
  }

  agregar(){
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`img/facturas/${filename}.jpg`);
    imageRef.putString(this.base64Image, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
      // Do something here when the data is succesfully uploaded!
      this.showSuccesfulUploadAlert();
      
      this.agregarFoto(filename);
     });
  }

  subir(){
    this.navCtrl.push('HomeClientePage');
  }
  showSuccesfulUploadAlert() {
    let alert = this.alertCtrl.create({
      title: 'Uploaded!',
      subTitle: 'Picture is uploaded to Firebase',
      buttons: ['OK']
    });
    alert.present();

    // clear the previous photo data in the variable
    this.base64Image = "";
  }
  agregarFoto(filename){
    
        //this.uid = 'asfdfhsfhgjsfhj';
    
        this.infoFactura$.push({
    
          uid: this.uid,
        
          almacen: 'cita',
          estado: 'sinValidar',
          url: `img/facturas/'${filename}'.jpg`
    
        })
      }
}
