import ILocalStoreable from './interfaces/ILocalStoreable'
export default class SettingsModel extends ILocalStoreable {

    /* General */
    static updateProperty(propName, value) {
        let thisSettings = this.get();
        thisSettings[propName] = value;
        thisSettings.save();
    }

    /* Appearance */
    get darkMode() { return this._darkMode ? true : false; }
    set darkMode(val) { this._darkMode = val; }

    /* AuthCode */
    get authCode() { return this._authCode ? this._authCode : 'sotout'; }
    set authCode(val) { this._authCode = val; }

    /* UUIDs (Can be parsed from device data) */ 
    get deviceUUID() { return this._deviceUUID ? this._deviceUUID : '42CD224E-4010-E4CB-7EF5-FA70B19B7A5E'; } // 98:D3:31:30:76:18
    set deviceUUID(val) { this._deviceUUID = val; }

    /* Mode: BLE / Classic */

    /* Service: FFE0 (BLE Only) */

    /* Characteristic: FFE1 (BLE Only) */
    
}
