import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-angular-evaluacion-3',
  webDir: 'www',
  server:{
    androidScheme: 'https',
  },
  plugins:{
    CapacitorHttp:{
      enabled: true
    }
  }
};

export default config;
