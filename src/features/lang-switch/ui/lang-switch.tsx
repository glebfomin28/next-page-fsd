import { Button, Space } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

export const LangSwitch = () => {
  const router = useRouter();

  return (
    <Space>
      <Link href={router.pathname} locale="ru">
        <Button
          type={router.locale === 'ru' ? 'primary' : 'default'}
        >
          RU
        </Button>
      </Link>
      <Link href={router.pathname} locale="en">
        <Button
          type={router.locale === 'en' ? 'primary' : 'default'}
        >
          EN
        </Button>
      </Link>
    </Space>
  );
};
