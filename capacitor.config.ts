import {CapacitorConfig} from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.recipemanagerv3.app',
  appName: 'RecipeManagerV3',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
    },
  },
  cordova: {
    preferences: {
      LottieFullscreen: 'true',
      LottieHideAfterAnimationEnd: 'true',
      LottieAnimationLocation: 'public/assets/splash.json'
    },
  }
}

export default config
