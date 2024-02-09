export const dictionaries = {
  ru: () => import('./ru.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
};

export const i18n = {
  defaultLocale: 'ru',
  locales: ['en', 'ru'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const getDictionary = async (locale: string | undefined) => {
  if (!dictionaries[locale as Locale]) return null;
  return dictionaries[locale as Locale]();
};
