import { Component } from '@angular/core';
import {Platform} from '@ionic/angular'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform:Platform) {
    //this.showSplashScreen();
  }

  private async showSplashScreen() {
    await this.platform.ready();

    const lottie = (window as any).lottie;

    if(this.platform.is('android') && lottie) {
      await lottie.splashscreen.hide();
      await lottie.splashscreen.show('public/assets/splash.json', false);
    }
  }
}
