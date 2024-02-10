import { Typography } from 'antd';
import { useTranslation } from 'next-i18next';

export const Header = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <Typography.Title>{t('header_title')}</Typography.Title>
    </div>
  );
};
