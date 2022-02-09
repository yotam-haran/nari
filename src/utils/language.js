import { writable } from 'svelte/store';
import { browser } from '$app/env';
import FlagGB from '$lib/Icons/FlagGB.svelte';
import FlagIL from '$lib/Icons/FlagIL.svelte';

export const languages = [
    { id: 'en', name: { he: 'אנגלית', en: 'English' }, dir: 'ltr', Flag: FlagGB },
    { id: 'he', name: { he: 'עברית', en: 'Hebrew' }, dir: 'rtl', Flag: FlagIL }
];

export const language = writable(languages[0]);

let firstRender = true;
language.subscribe(language => {
    if(browser && !firstRender)
        localStorage.setItem('lang', language.id);
    else
        firstRender = false;
});

if(browser){
    const storedLang = localStorage.getItem('lang');
    if(storedLang) language.set(languages.find(l => l.id === storedLang));
}
