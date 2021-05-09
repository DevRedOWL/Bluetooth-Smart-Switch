import { getDevice } from 'framework7';
const device = getDevice();

// Main vibrate function
function tryVibrate(time) {
    try {
        if (typeof time === 'string') {
            // cordova-plugin-taptic-engine 
            TapticEngine.impact({
                style: time // light | medium | heavy | rigid (iOS 13+) | soft (iOS 13+)
            });
            return true;
        }
        else {
            // cordova-plugin-vibrate and is required
            navigator.vibrate(time);
            return true;
        }
    }
    catch (error) { return false; }
}

// Tap for different devices
export function tapKeyVibrate() {
    // FIXME: Deprecated
    if (getDevice().ios) try { TapticEngine.unofficial.weakBoom(); } catch (ex) { }

    tryVibrate(getDevice().ios ? 'medium' : 8);
}


// Tap for different devices
export function tapVibrate() {
    // FIXME: Deprecated
    if (getDevice().ios) try { TapticEngine.unofficial.weakBoom(); } catch (ex) { }

    tryVibrate(getDevice().ios ? 'light' : 4);
}

// Shake vibration
export function shakeVibrate() {
    tryVibrate(140);
}