import {Component} from '@angular/core'
import {Auth, GoogleAuthProvider, signInWithPopup} from '@angular/fire/auth'
import {Router} from '@angular/router'
import {ToastController} from '@ionic/angular'

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.page.html',
  styleUrls: ['./my-book.page.scss'],
})
export class MyBookPage {

  email: string = '';
  password: string = '';

  constructor(private auth: Auth, private router: Router, private toastController: ToastController) { }

  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(this.auth, provider);
      console.log('Login successful:', userCredential);

      // Show success message
      this.presentToast('Login successful.');

      // Navigate to my-book page on successful registration
      this.router.navigateByUrl('/my-book/my-recipes');
    } catch (error) {
      console.error('Login error:', error);

      // Show error message
      this.presentToast('Login failed. Please try again.', 3000);
    }
  }

  async presentToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message,
      duration,
      position: 'top', // You can change the position if needed
    });
    toast.present();
  }


}
