import readFromCache from './5-cache.js';

readFromCache('home').then((a) => console.log(a));
readFromCache('park').catch((e) => console.log(e.message));
