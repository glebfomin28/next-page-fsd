import { create } from 'zustand';
import Cookies from 'js-cookie';
import { LangSwitchStoreType, LangType, LangSwitchStoreStateType } from '../types/lang-switch-store.type';

const initState: LangSwitchStoreStateType = {
  lang: 'ru',
  isLoading: true,
};

export const useLangSwitch = create<LangSwitchStoreType>((set, get) => ({
  ...initState,
  loadLang: () => {
    const lang = Cookies.get('lang') as LangType ?? get().lang;
    set({ lang, isLoading: false });
  },
  setLang: (lang) => {
    Cookies.set('lang', lang, {
      expires: 5,
      path: '/',
      domain: '',
      secure: true,
      sameSite: 'strict',
    });
    set({ lang });
  },
}));
