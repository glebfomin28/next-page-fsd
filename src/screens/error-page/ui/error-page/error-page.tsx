import { UnauthorizedPage } from '../components/unauthorized/unauthorized-page.async';
import { ForbiddenPage } from '../components/forbidden/forbidden-page.async';
import { NotFoundPage } from '../components/not-found/not-found-page.async';
import { ServerErrorPage } from '../components/server-error/server-error-page.async';

export const ErrorPage = {
  Forbidden: ForbiddenPage,
  NotFound: NotFoundPage,
  ServerError: ServerErrorPage,
  Unauthorized: UnauthorizedPage,
};
