export type ErrorKeyItemValue = {
  statusText?: string;
  titleError?: string;
  textError?: string;
};

export type ErrorKeysType =
  | 401
  | 403
  | 500
  | 302
  | 'default';

export type ErrorKeysConfigType = Record<ErrorKeysType, ErrorKeyItemValue>;
