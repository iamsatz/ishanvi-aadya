import { PARENT_PIN } from '../config/app';

const PIN_KEY = 'parent-pin-v1';

/** Current parent PIN (device-local; falls back to the default in config). */
export function getParentPin(): string {
  try {
    return localStorage.getItem(PIN_KEY) || PARENT_PIN;
  } catch {
    return PARENT_PIN;
  }
}

export function setParentPin(pin: string): void {
  try {
    localStorage.setItem(PIN_KEY, pin);
  } catch {
    /* private mode / quota — ignore */
  }
}

export function isValidPin(pin: string): boolean {
  return /^\d{4}$/.test(pin);
}
