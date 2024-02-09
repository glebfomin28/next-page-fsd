import { lazy } from 'react';

const ForbiddenPageAsync = lazy(() => import('./forbidden-page'));

export { ForbiddenPageAsync as ForbiddenPage };
