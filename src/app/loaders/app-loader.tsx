import { ReactNode } from 'react';
import { useApplayAppInterceptor } from '../interceptors/app-interceptor';

export const AppLoader = ({ children }: { children?: ReactNode }) => {
  useApplayAppInterceptor();

  return children;
};
