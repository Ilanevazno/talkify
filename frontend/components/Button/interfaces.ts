import { ReactElement } from 'react';

export interface IProps {
  children: ReactElement | string;
  type: string;
  disabled: boolean;
}
