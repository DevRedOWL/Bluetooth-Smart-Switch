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
}
