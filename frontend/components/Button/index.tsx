import { ReactElement } from 'react';
import { IProps } from './interfaces';

import { Wrapper } from './styles';

const Button = ({ children }: IProps): ReactElement => <Wrapper>{children}</Wrapper>;

export default Button;
