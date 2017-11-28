import {
  STORAGE_KEY,
} from 'Core/state/state';

export const
  RESET_LOCALSTORAGE = () => {
    localStorage.removeItem(STORAGE_KEY);
  };
