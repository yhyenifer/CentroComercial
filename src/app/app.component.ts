import { HomeClientePage } from '../pages/home-cliente/home-cliente';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
 import { LoginPage } from '../pages/login/login';
 import { AngularFireAuth } from 'angularfire2/auth';
 export const firebaseConfig = {
  apiKey: "AIzaSyDUz7IJOCgsz5Zk9HBoU0cwF9z2Q229LtI",
  authDomain: "tiendq-3d47a.firebaseapp.com",
  databaseURL: "https://tiendq-3d47a.firebaseio.com",
  storageBucket: "tiendq-3d47a.appspot.com",
  messagingSenderId: "12950516640"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   login: LoginPage;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage'  //HomePage; //esto cambia  para poner el login
  pages: Array<{title: string, component: any}>;
  
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private afAuth: AngularFireAuth
    
  ) {
     platform.ready().then(() => {
       
      this.pages = [
     
        { title: 'Subir Facturas', component: HomeClientePage },
        { title: 'Mis Facturas', component: HomeClientePage }, // pendiente de cambio
        { title: 'Mis Premios', component: HomeClientePage }, // pendiente de cambio
        { title: 'Premios', component: HomeClientePage }, // pendiente de cambio
        { title: 'Almacenes', component: HomeClientePage }, // pendiente de cambio
        { title: 'Eventos', component: HomeClientePage } // pendiente de cambio
        ];
    });
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      firebase.initializeApp(firebaseConfig);
    });
  }

  openPage(page) {
    // // Reset the content nav to have just this page
    // // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

salir(){
console.log("presionamos salir");
this.afAuth.auth.signOut();
this.platform.exitApp();
}

}
