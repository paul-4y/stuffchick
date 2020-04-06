import React, { useState } from 'react';

import StyledButton from 'common/components/Button';
import FormInput from 'common/components/FormInput';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

import { Footer, Wrapper } from './style.module';

const SignUp = () => {
    const [formData, setFormData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
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
        const { displayName, email, password, confirmPassword } = formData;
        if (password !== confirmPassword) {
            alert('Passwords must be the same !');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            setFormData({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            console.log('handleSubmit -> error', error);
        }
    };

    return (
        <>
            <h2>I do not have an account</h2>
            <h4>Sign up with your email and password</h4>
            <Wrapper>
                <form action="" onSubmit={handleSubmit}>
                    <FormInput
                        value={formData.displayName}
                        name="displayName"
                        type="text"
                        handleOnchange={(e) => handleChange('displayName', e.currentTarget.value)}
                        label="display name"
                    />
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
                    <FormInput
                        value={formData.confirmPassword}
                        name="confirmPassword"
                        type="password"
                        handleOnchange={(e) => handleChange('confirmPassword', e.currentTarget.value)}
                        label="confirm password"
                    />
                    <Footer>
                        <div>
                            <StyledButton type="submit">SIGN UP</StyledButton>
                        </div>
                    </Footer>
                </form>
            </Wrapper>
        </>
    );
};

export default SignUp;
