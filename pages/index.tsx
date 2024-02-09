import { GetStaticProps } from 'next';
import { MainPage } from '@/screens/main-page';
import 'src/screens/main-page/lang/ru.json';
import { getDictionary } from '@/screens/main-page/lang';

export default function Home() {
  return (
    <MainPage />
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      // messages: (await import(`src/screens/main-page/lang/${locale}.json`)).default,
      messages: await getDictionary(locale),
    },
  };
};
