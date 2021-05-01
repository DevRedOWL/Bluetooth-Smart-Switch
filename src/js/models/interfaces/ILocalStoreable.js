export default class ILocalStoreable {
    /** Saves current instance of Model to localStorage */
    save() { localStorage.setItem(this.constructor.localStorageName, JSON.stringify(this)); }

    /** Returns name of field in localStorage that should be used for keeping data */
    static get localStorageName() { return `${this.name.charAt(0).toLowerCase() + this.name.slice(1).replace('Model', '')}Data`; }

    /** Returns currently saved object to localStorage (as property) */
    static get localStorageObject() { return this.get(); }

    /** Returns currently saved object to localStorage (as function) */
    static get() {
        let resultObject = new this(), storageObject = JSON.parse(localStorage.getItem(this.localStorageName));
        for (let field in storageObject) resultObject[field] = storageObject[field];
        return resultObject;
    }

    /** Saves provided object to localStorage, if object type match with this class */
    static set(object) {
        if (object && object instanceof this) localStorage.setItem(this.localStorageName, JSON.stringify(object));
        else throw { error: `You tried to save ${object ? object.constructor.name : undefined} as ${this.name}` }
    }

    /** Removes object from localStorage and returns true/false depends on success */
    static clear() { try { localStorage.removeItem(this.localStorageName); return true; } catch (error) { return false; } }
}