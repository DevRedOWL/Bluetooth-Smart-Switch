import SettingsModel from './models/settingsModel.js'

const RU = {
    // Main
    LANG_NAME: 'Русский',
    LANG_SHORT_NAME: 'Рус',
    SETTINGS: 'Настройки',
    LOCK: 'замок',
    WITH: 'с',

    // Settings
    DEVICE_SETTINGS: 'Настройки устройства',
    CUSTOM_SETTINGS: 'Прочие настройки',
    SELECT_DEVICE: 'Выбрать устройство',
    AVAILABLE_DEVICES: 'Доступные устройства',
    VIEV_DEVICE_INFO: 'Параметры устройства',
    DEVICE: 'Устройство',
    SERVICE: 'Служба',
    CHARACTERISTIC: 'Характеристика',
    SEARCH: 'Поиск',
    STOP_SEARCH: 'Остановить поиск',
    SWIPE_FOR_LIST: 'Свайп для просмотра списка устройств',

    // Settings buttons
    LIGHT_M: 'Светлая',
    DARK_M: 'Тёмная',
    THEME: 'тема',
    MODE: 'режим',
    ENABLED: 'включен',
    MODE_ENABLED: 'режим включен',
    THEME_ENABLED: 'тема активна',
    ACCESS_CODE: 'Ключ доступа',
    DEVICE_TAG: 'Метка устройства',
    LANGUAGE: 'Язык',
    STANDART_MODE: 'Стандартный режим',
    ADVANCED_MODE: 'Продвинутый режим',
    DISABLE_ADMIN_MODE: 'Отключить админ-режим',
    ENABLE_ADMIN_MODE: 'Включить админ-режим',

    // Settings functions
    ENTER_ACCESS_CODE: 'Введите новый ключ доступа',
    ENTER_DEVICE_TAG: 'Введите новую метку устройства',
    ENTER_ADMIN_PASS: 'Введите админ-пароль',
    IS_SELECT_DEVICE: 'Вы хотите выбрать устройство',

    // Messages
    ERROR: 'Ошибка',
    SEARCH_ERROR: 'Ошибка поиска',
    ACCESS_CODE_TOO_LARGE: 'Ключ доступа не может быть длиннее 255 символов',
    ACCESS_CODE_UPDATED: 'Ключ доступа обновлен',
    DEVICE_TAG_TOO_LARGE: 'Метка устройства не может быть длиннее 16 символов',
    DEVICE_TAG_UPDATED: 'Метка устройства обновлена',
    APP_LANG_UPDATED: 'Язык приложения установлен',
    WRONG_PASS: 'Неверный пароль',
    ADMIN_MODE_ON: 'Продвинутый режим включен',
    ADMIN_MODE_OFF: 'Продвинутый режим отключен',
    DEVICE_SELECTED: 'Устройство выбрано',
    UNABLE_TO_SCAN: 'Невозможно выполнить сканирование',
    GPS_IS_DISABLED: 'GPS отключено',
    PLS_ENABLE_GPS: 'Для поиска устройств необходимо включить геолокацию',
    STOP_SCAN_ERROR: 'Ошибка при остановке сканирования',
    BLE_ERROR: `Кажется, что ваше устройство не поддерживает Bluetooth LE`,
    DEVICE_NA: `Устройство недоступно`,
    CONNECTION_ERROR: 'При подключении к устройству возникла ошибка'
}

const EN = {
    // Main
    LANG_NAME: 'English',
    LANG_SHORT_NAME: 'En',
    SETTINGS: 'Settings',
    LOCK: 'lock',
    WITH: 'with',

    // Settings
    DEVICE_SETTINGS: 'Device settings',
    CUSTOM_SETTINGS: 'Custom',
    SELECT_DEVICE: 'Select device',
    AVAILABLE_DEVICES: 'Availlable devices',
    VIEV_DEVICE_INFO: 'View device info',
    DEVICE: 'Device',
    SERVICE: 'Service',
    CHARACTERISTIC: 'Characteristic',
    SEARCH: 'Search',
    STOP_SEARCH: 'Stop search',
    SWIPE_FOR_LIST: 'Swipe up for device list',

    // Settings buttons
    LIGHT_M: 'Light',
    DARK_M: 'Dark',
    THEME: 'theme',
    MODE: 'mode',
    ENABLED: 'enabled',
    MODE_ENABLED: 'mode enabled',
    THEME_ENABLED: 'theme enabled',
    ACCESS_CODE: 'Access code',
    DEVICE_TAG: 'Device tag',
    LANGUAGE: 'Language',
    STANDART_MODE: 'Standart mode',
    ADVANCED_MODE: 'Advanced mode',
    DISABLE_ADMIN_MODE: 'Disable admin mode',
    ENABLE_ADMIN_MODE: 'Enable admin mode',

    // Settings functions
    ENTER_ACCESS_CODE: 'Enter new access code',
    ENTER_DEVICE_TAG: 'Enter new device tag',
    ENTER_ADMIN_PASS: 'Enter admin password',
    IS_SELECT_DEVICE: 'Select device',

    // Messages
    ERROR: 'Error',
    SEARCH_ERROR: 'Search error',
    ACCESS_CODE_TOO_LARGE: 'Access code can not be large, than 255 symbols',
    ACCESS_CODE_UPDATED: 'Access code updated',
    DEVICE_TAG_TOO_LARGE: 'Device tag can not be large, than 16 symbols',
    DEVICE_TAG_UPDATED: 'Device tag updated',
    APP_LANG_UPDATED: 'Application language updated',
    WRONG_PASS: 'Wrong password',
    ADMIN_MODE_ON: 'Admin mode enabled',
    ADMIN_MODE_OFF: 'Admin mode disabled',
    DEVICE_SELECTED: 'Device selected',
    UNABLE_TO_SCAN: 'Unable to scan devices',
    GPS_IS_DISABLED: 'GPS is disabled',
    PLS_ENABLE_GPS: 'Enable location services to scan devices',
    STOP_SCAN_ERROR: 'Scan stopping error',
    BLE_ERROR: `It seems that this device doesn't support Bluetooth LE`,
    DEVICE_NA: `Device is not available`,
    CONNECTION_ERROR: 'An error occured during connection to device'
}

export default function Localization() {
    switch (SettingsModel.get().appLanguage) {
        case 'ru': return RU; break;
        case 'en': return EN; break;
        default: return EN; break;
    }
}
