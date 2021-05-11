/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';

export interface IProps {
  placeholder: string;
  onChange(e: ChangeEvent<any>): void;
  type?: string;
  name?: string;
}
