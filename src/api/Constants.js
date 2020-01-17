import Config from './Config';

const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'local';
const VERSION = process.env.VERSION ? process.env.VERSION : 'stag';

const KEY = `${ENV}-${PLATFORM}-${VERSION}`;

export const SITE_URL = Config[KEY].SITE_URL;
export const API_URL = Config[KEY].API_URL;
export const API_KEY = Config[KEY].API_KEY;
