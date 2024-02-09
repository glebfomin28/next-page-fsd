export type LangType = 'ru' | 'en';

export type LangSwitchStoreStateType = {
  isLoading: boolean;
  lang: LangType;
};

type LangSwitchStoreActionsType = {
  loadLang: () => void;
  setLang: (lang: LangType) => void;
};

export type LangSwitchStoreType = LangSwitchStoreStateType & LangSwitchStoreActionsType;
