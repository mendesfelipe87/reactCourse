import {Platform} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload it,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default instructions;