import { ErrorKeysConfigType } from '../model/types/error-keys-config.type';

export const ERROR_STATUS_CODE: ErrorKeysConfigType = {
  401: {
    statusText: 'Unauthorized',
    titleError: 'Ошибка авторизации',
    textError: '',
  },
  403: {
    statusText: 'Forbidden',
    titleError: 'Ошибка доступа',
    textError: '',
  },
  500: {
    statusText: 'Internal server error',
    titleError: 'Ошибка сервера',
    textError: '',
  },
  302: {
    statusText: 'found',
    titleError: 'Ошибка создания',
    textError: '',
  },
  default: {
    titleError: 'Что-то пошло не так...',
    textError: 'Мы работаем над устранением проблемы. Попробуйте позже.',
  },
};
