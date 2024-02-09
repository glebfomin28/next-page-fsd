export function AppProvider({ children }: { children?: React.ReactNode }) {
  return children;
  // return (
  //   <NextIntlClientProvider
  //     locale={router.locale}
  //     timeZone="Europe/Vienna"
  //     messages={pageProps.messages}
  //   >
  //     {children}
  //   </NextIntlClientProvider>
  // );
}
