import ILocalStoreable from './interfaces/ILocalStoreable'
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

    /* AuthCode */
    get authCode() { return this._authCode ? this._authCode : 'sotout'; }
    set authCode(val) { this._authCode = val; }

    /* Device name */
    get deviceSSID() { return this._deviceSSID ? this._deviceSSID : 'HC-08'; } // HC-06
    set deviceSSID(val) { this._deviceSSID = val; }

    /* UUIDs (Can be parsed from device data) */
    get deviceUUID() { return this._deviceUUID ? this._deviceUUID : '64:33:DB:96:56:F1'; } // 64:33:DB:96:56:F1 98:D3:31:30:76:18
    set deviceUUID(val) { this._deviceUUID = val; }

    /* Mode: BLE / Classic */

    /* Service: FFE0 (BLE Only) */

    /* Characteristic: FFE1 (BLE Only) */

}
