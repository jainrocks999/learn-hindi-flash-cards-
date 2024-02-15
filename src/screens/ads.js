import {Platform} from 'react-native';
import {TestIds} from 'react-native-google-mobile-ads';
export const Addsid = {
  ...Platform.select({
    android: {
      BANNER: 'ca-app-pub-3339897183017333/1011615587',
      Interstitial: 'ca-app-pub-3339897183017333/8534882380',
    },
    ios: {
      BANNER: 'ca-app-pub-3339897183017333/3744755989',
      Interstitial: 'ca-app-pub-3339897183017333/6545871677',
    },
  }),
};
