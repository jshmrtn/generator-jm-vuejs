import {
    STORAGE_KEY,
} from 'core/state/state';

export const
    RESET_LOCALSTORAGE = () => {
        localStorage.removeItem(STORAGE_KEY);
    };
