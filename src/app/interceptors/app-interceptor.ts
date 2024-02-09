import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AxiosError } from 'axios';
import { $api } from '@/shared/api/api-instance';
import { useEventCallback } from '@/shared/hooks/react/use-event-callback';

export function useApplayAppInterceptor() {
  const router = useRouter();

  const routerReplace = useEventCallback(router.replace);
  useEffect(() => {
    $api.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        // обработка ошибок
        if (error.response?.status === 403) {
          // routerReplace(ROUTER_PATHS[403]);
        }
        throw error;
      },
    );
  }, [routerReplace]);
}
