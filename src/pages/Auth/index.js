import React from 'react';

import SignIn from 'features/SignIn';
import SignUp from 'features/SignUp';

import { Wrapper } from './style.module';

const Auth = () => (
    <Wrapper>
        <div>
            <SignIn />
        </div>
        <div>
            <SignUp />
        </div>
    </Wrapper>
);

export default Auth;
