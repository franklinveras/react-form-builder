import enLang from './entries/en-us';
import itLang from './entries/it-it';
import vnLang from './entries/vi-vn';
import faLang from './entries/fa-ir';
import ptLang from './entries/pt-br';

export const AppLanguages = [
  {
    languageId: 'vietnamese',
    locale: 'vi',
    name: 'Vietnamese',
    icon: 'vn',
  },
  {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us',
  },
  {
    languageId: 'italian',
    locale: 'it',
    name: 'Italiano',
    icon: 'it',
  },
  {
    languageId: 'persian',
    locale: 'ir',
    name: 'farsi',
    icon: 'ir',
  },
  {
    languageId: 'portuguese',
    locale: 'pt',
    name: 'Português',
    icon: 'pt',
  }
];

const AppLocale = {
  en: enLang,
  fa: faLang,
  it: itLang,
  pt: ptLang,
  vi: vnLang
};

export default AppLocale;
