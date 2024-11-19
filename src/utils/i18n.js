import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '~/locales/en.json';
import translationVI from '~/locales/vi.json';
import translationKO from '~/locales/ko.json';

const resources = {
  en: { translation: translationEN },
  vi: { translation: translationVI },
  ko: { translation: translationKO }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'vi', 'ko'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    }
  });

// Handle initialization errors
i18n.on('initialized', () => {
  console.log('i18n initialized successfully');
});

i18n.on('error', (error) => {
  console.error('i18n initialization error:', error);
});

export default i18n;