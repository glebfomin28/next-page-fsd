import { AppProps } from 'next/app';
import { AppLoader } from './loaders/app-loader';
import { AppProvider } from './providers/app-provider';
import { AppLayout } from './layouts/app-layout';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppLoader>
      <AppProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AppProvider>
    </AppLoader>
  );
};
