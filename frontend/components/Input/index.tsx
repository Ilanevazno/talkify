import { ReactElement } from 'react';

import { InputField } from './styles';
import { IProps } from './interfaces';

const Input = (props: IProps): ReactElement => <InputField {...props} />;

export default Input;
