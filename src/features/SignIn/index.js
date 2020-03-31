import React, { useState } from 'react';

import StyledButton from 'common/components/Button';
import FormInput from 'common/components/FormInput';

import { Footer, Wrapper } from './style.module';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log('SignIn -> password', password);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('SignIn -> category', email, password);
    };

    return (
        <>
            <h2>I already have an account</h2>
            <h4>Sign in with your email and password</h4>
            <Wrapper>
                <form action="" onSubmit={handleSubmit}>
                    <FormInput
                        value={email}
                        name="email"
                        type="email"
                        handleOnchange={(e) => setEmail(e.currentTarget.value)}
                        label="email"
                    />
                    <FormInput
                        value={password}
                        name="password"
                        type="password"
                        handleOnchange={(e) => setPassword(e.currentTarget.value)}
                        label="password"
                    />
                    <Footer>
                        <div>
                            <StyledButton type="submit">SIGN IN</StyledButton>
                        </div>
                        <div>
                            <StyledButton type="button" bgColor="dodgerblue">
                                SIGN IN WITH GOOGLE
                            </StyledButton>
                        </div>
                    </Footer>
                </form>
            </Wrapper>
        </>
    );
};

export default SignIn;
