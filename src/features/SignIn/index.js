import React, { useState } from 'react';

import StyledButton from 'common/components/Button';
import FormInput from 'common/components/FormInput';
import { auth, signInWithGoogle } from 'firebase/firebase.utils';

import { Footer, Wrapper } from './style.module';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (field, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('SignUp -> formData', formData);
        const { email, password } = formData;
        if (!password) {
            alert('Enter password!');
            return;
        }

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setFormData({
                email: '',
                password: '',
            });
        } catch (error) {
            console.log('handleSubmit -> error', error);
        }
    };

    return (
        <>
            <h2>I already have an account</h2>
            <h4>Sign in with your email and password</h4>
            <Wrapper>
                <form action="" onSubmit={handleSubmit}>
                    <FormInput
                        value={formData.email}
                        name="email"
                        type="email"
                        handleOnchange={(e) => handleChange('email', e.currentTarget.value)}
                        label="email"
                    />
                    <FormInput
                        value={formData.password}
                        name="password"
                        type="password"
                        handleOnchange={(e) => handleChange('password', e.currentTarget.value)}
                        label="password"
                    />
                    <Footer>
                        <div>
                            <StyledButton type="submit">SIGN IN</StyledButton>
                        </div>
                        <div>
                            <StyledButton type="button" bgColor="dodgerblue" onClick={signInWithGoogle}>
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
