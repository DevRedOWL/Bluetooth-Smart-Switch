import $ from 'dom7';
import Framework7, { getDevice } from 'framework7/bundle';

// Import F7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
import '../css/padlock.css';
import '../css/dark.css';
import '../css/settings.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';

// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7.html';

var device = getDevice();
var app = new Framework7({
  name: 'SmartSwitch', // App name
  theme: 'ios', // auto - Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component
  id: 'ru.devredowl.smartswitch', // App bundle ID
  // App store
  store: store,
  // App routes
  routes: routes,
  // Touch settings
  touch: {
    tapHold: true //enable tap hold events
  },
  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    enabled: true,
    iosOverlaysWebView: false,
    iosBackgroundColor: store.getters.settings.value.darkMode ? '#f2bc23' : '#7000e0',
    iosTextColor: store.getters.settings.value.darkMode ? 'black' : 'white',
    androidOverlaysWebView: false,
    androidBackgroundColor: store.getters.settings.value.darkMode ? '#f2bc23' : '#7000e0',
    androidTextColor: store.getters.settings.value.darkMode ? 'black' : 'white'
  },
  on: {
    init: function () {
      // Init dark mode
      if (store.getters.settings.value.darkMode) $('body').addClass('theme-dark');
      else $('body').removeClass('theme-dark');
      //
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});