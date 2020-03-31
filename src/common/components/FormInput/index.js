import React from 'react';

import { Label, StyledInput, Wrapper } from './style.module';

const FormINput = ({ handleOnchange, label, ...otherProps }) => (
    <Wrapper>
        <StyledInput onChange={handleOnchange} {...otherProps} />
        {label ? <Label isTop={otherProps.value.length > 0}>{label}</Label> : null}
    </Wrapper>
);

export default FormINput;
