import registerRootComponent from './node_modules/expo/build/launch/registerRootComponent';
import App from './src/App';
// import name from './app.json';


import { LogBox, YellowBox } from 'react-native';
import _ from 'lodash';


// YellowBox.ignoreWarnings(['Setting a timer']);
// const _console = _.clone(console);
// console.warn = message => {
//     if (message.indexOf('Setting a timer') <= -1) {
//         _console.warn(message);
//     }
// };

registerRootComponent(App);

// "main": "node_modules/expo/AppEntry.js",