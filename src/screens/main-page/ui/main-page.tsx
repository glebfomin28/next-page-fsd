import { Typography } from 'antd';
import { useTranslations } from 'use-intl';
import { LangSwitch } from '@/features/lang-switch';

const MainPage = () => {
  const t = useTranslations('main');

  return (
    <div>
      <Typography.Title>
        {t('title')}
      </Typography.Title>
      <Typography.Text>
        text
      </Typography.Text>
      <LangSwitch />
    </div>
  );
};

export default MainPage;
