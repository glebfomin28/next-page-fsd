import { lazy } from 'react';

const NotFoundPageAsync = lazy(() => import('./not-found-page'));

export { NotFoundPageAsync as NotFoundPage };
