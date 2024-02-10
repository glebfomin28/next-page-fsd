import { Button, Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import { LangSwitch } from '@/features/lang-switch';
import { $api } from '@/shared/api/api-instance';

const MainPage = () => {
  const { t } = useTranslation('mainPage');

  const testFetch = async () => {
    const data = await $api('https://1jsonplaceholder.typicode.com/todos/1');
    console.log(data);
  };

  return (
    <div>
      <Typography.Title>
        {t('main_page_title')}
      </Typography.Title>
      <LangSwitch />
      <Button onClick={testFetch}>testFetch</Button>
    </div>
  );
};

export default MainPage;
