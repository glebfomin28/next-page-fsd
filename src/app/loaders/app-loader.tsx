import { ReactNode, useEffect } from 'react';
import { useLangSwitch } from '@/features/lang-switch';
import { useApplayAppInterceptor } from '../interceptors/app-interceptor';

export const AppLoader = ({ children }: { children?: ReactNode }) => {
  const loadLang = useLangSwitch((s) => s.loadLang);

  useApplayAppInterceptor();

  useEffect(() => {
    loadLang();
  }, [loadLang]);

  return children;
};
