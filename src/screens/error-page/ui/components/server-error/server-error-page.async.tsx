import { lazy } from 'react';

const ServerErrorPageAsync = lazy(() => import('./server-error-page'));

export { ServerErrorPageAsync as ServerErrorPage };
