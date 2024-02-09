import { AppProps } from 'next/app';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import { AppLoader } from './loaders/app-loader';
import { AppProvider } from './providers/app-provider';

export const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <AppLoader>
      <AppProvider>
        <NextIntlClientProvider
          locale={router.locale}
          messages={pageProps.messages}
        >
          <Component {...pageProps} />
        </NextIntlClientProvider>
      </AppProvider>
    </AppLoader>
  );
};
