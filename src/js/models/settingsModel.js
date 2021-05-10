import ILocalStoreable from './interfaces/ILocalStoreable';
import { getDevice } from 'framework7';

export default class SettingsModel extends ILocalStoreable {

    /* Allows to update property if exists and return new object */
    static updateProperty(propName, propValue) {
        let thisSettings = this.get();
        if (propName) {
            thisSettings[propName] = propValue;
            thisSettings.save();
        }
        return thisSettings;
    }

    /* Appearance */
    get darkMode() { return this._darkMode ? true : false; }
    set darkMode(val) { this._darkMode = val; }

    /* Language */
    get appLanguage() { return this._appLanguage ? this._appLanguage : 'en'; }
    set appLanguage(val) { this._appLanguage = val; }

    /* accessCode */
    get accessCode() { return this._accessCode ? this._accessCode : 'sotout'; }
    set accessCode(val) { this._accessCode = val; }

    /* Home button name */
    get deviceTag() { return this._deviceTag ? this._deviceTag : 'Home'; }
    set deviceTag(val) { this._deviceTag = val; }

    /* Device name */
    get deviceSSID() { return this._deviceSSID ? this._deviceSSID : 'HC-08'; }
    set deviceSSID(val) { this._deviceSSID = val; }

    /* UUIDs (Can be parsed from device data) */
    get deviceUUID() {
        return this._deviceUUID
            ? this._deviceUUID
            : (getDevice().ios ? '42CD224E-4010-E4CB-7EF5-FA70B19B7A5E' : '64:33:DB:96:56:F1');
    }
    set deviceUUID(val) { this._deviceUUID = val; }

    /* Mode: BLE / Classic */

    /* Service: FFE0 (BLE Only) */
    get deviceServiceUUID() { return this._deviceServiceUUID ? this._deviceServiceUUID : 'FFE0'; }
    set deviceServiceUUID(val) { this._deviceServiceUUID = val; }

    /* Characteristic: FFE1 (BLE Only) */
    get deviceCharacteristicUUID() { return this._deviceCharacteristicUUID ? this._deviceCharacteristicUUID : 'FFE1'; }
    set deviceCharacteristicUUID(val) { this._deviceCharacteristicUUID = val; }

}
