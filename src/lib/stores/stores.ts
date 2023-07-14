import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const theme = createStore('light', 'theme', browser);

function createStore<T>(initialValue: T, key: string, init = true) {
  if (init) initialValue = JSON.parse(localStorage.getItem(key) ?? JSON.stringify(initialValue));
  const { subscribe, set: _set } = writable<T>(initialValue);

  return {
    subscribe,
    set(newValue: T) {
      localStorage.setItem(key, JSON.stringify(newValue));
      _set(newValue);
    }
  }
}
