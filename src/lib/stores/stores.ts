import { browser } from "$app/environment";
import { writable } from "svelte/store";

type themeTypes = 'light' | 'dark';
type sidebarTypes = 'false' | 'true';

export const theme = createStore<themeTypes>('light', 'theme');
export const sidebar = createStore<sidebarTypes>('false', 'sidebar');

function createStore<T>(initialValue: T, key: string) {
  if (browser) initialValue = JSON.parse(localStorage.getItem(key) ?? JSON.stringify(initialValue));
  const { subscribe, set: _set } = writable<T>(initialValue);

  return {
    subscribe,
    set(newValue: T) {
      localStorage.setItem(key, JSON.stringify(newValue));
      _set(newValue);
    }
  }
}
