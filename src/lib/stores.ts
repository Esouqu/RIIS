import { browser } from "$app/environment";
import type { Operator } from ".prisma/client";
import { writable } from "svelte/store";

type themeTypes = 'light' | 'dark';
type sidebarTypes = 'false' | 'true';

export const theme = createStoreWithLocalStorage<themeTypes>('light', 'theme');
export const sidebar = createStoreWithLocalStorage<sidebarTypes>('false', 'sidebar');

function createStoreWithLocalStorage<T>(initialValue: T, key: string) {
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

// function activateOperator(initialValue: Operator) {
//   const { subscribe, update, set } = writable<Operator>(initialValue);

//   function toggle() {
//     update((prev) => !prev)
//   }

//   return {
//     subscribe,
//   }
// }