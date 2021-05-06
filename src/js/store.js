
import { createStore } from 'framework7';
import $ from 'dom7';
import SettingsModel from './models/settingsModel.js';

const store = createStore({
  state: {
    // products: [
    //   {
    //     id: '1',
    //     title: 'Apple iPhone 8',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
    //   },
    //   {
    //     id: '2',
    //     title: 'Apple iPhone 8 Plus',
    //     description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
    //   },
    //   {
    //     id: '3',
    //     title: 'Apple iPhone X',
    //     description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
    //   },
    // ],
    settings: SettingsModel.get(),
    btDevices: [
      // Mock data
      // { ssid: 'HC-01', uuid: '64:33:DB:96:56:F1' },
      // { ssid: 'HC-02', uuid: '64:33:DB:96:56:F2' },
      // { ssid: 'HC-03', uuid: '64:33:DB:96:56:F3' },
      // { ssid: 'HC-04', uuid: '64:33:DB:96:56:F4' },
      // { ssid: 'HC-05', uuid: '64:33:DB:96:56:F5' },
      // { ssid: 'HC-06', uuid: '64:33:DB:96:56:F6' }
    ],
    scanState: false
  },
  getters: {
    settings({ state }) {
      state.settings = SettingsModel.get();
      return state.settings;
    },
    btDevices({ state }) {
      return state.btDevices;
    },
    scanState({ state }) {
      return state.scanState;
    }
  },
  actions: {
    // Main settings
    updateSettings({ state }, args) {
      //console.log('Setting updated', args.propName, args.propValue);
      state.settings = SettingsModel.updateProperty(args.propName, args.propValue);
      // Set theme
      if (state.settings.darkMode) $('body').addClass('theme-dark');
      else $('body').removeClass('theme-dark');
    },
    // Bluetooth devices
    addBTDevice({ state }, device) {
      state.btDevices = [...state.btDevices, device];
    },
    clearBTDevices({ state }) {
      state.btDevices = [];
    },
    setScanState({ state }, newState) {
      state.scanState = newState;
    }
  },
})
export default store;
