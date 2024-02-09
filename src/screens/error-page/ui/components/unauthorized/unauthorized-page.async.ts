import { lazy } from 'react';

const UnauthorizedPageAsync = lazy(() => import('./unauthorized-page'));

export { UnauthorizedPageAsync as UnauthorizedPage };
