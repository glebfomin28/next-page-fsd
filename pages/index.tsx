import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MainPage } from '@/screens/main-page';

export default function Home() {
  return (
    <MainPage />
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['common', 'mainPage'])),
    },
  };
};
