import {Platform} from 'react-native';
const productSkus = Platform.select({
  android: ['in_ads_product'],
  ios: ['com.eflashapps.eflashhindi.proupgrade'],
});
export const constants = {
  productSkus,
};
