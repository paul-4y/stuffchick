import React from 'react';

import { StyledButton } from './style.module';

const Button = ({ children, ...otherProps }) => <StyledButton {...otherProps}>{children}</StyledButton>;

export default Button;
