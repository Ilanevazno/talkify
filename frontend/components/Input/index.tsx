import { ReactElement } from 'react';

import { InputField } from './styles';
import { IProps } from './interfaces';

const Input = ({ placeholder }: IProps): ReactElement => <InputField placeholder={placeholder} />;

export default Input;
