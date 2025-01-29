import React, { useState } from 'react';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import ToastNotification, { showToast } from './ToastNotification';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isNewUser, setIsNewUser] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            showToast('Login successful!', 'success');
        } catch (error) {
            setError(error.message);
            showToast('Login failed. Please check your credentials.', 'error');
        }
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        setError('');
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            showToast('Registration successful!', 'success');
        } catch (error) {
            console.log('Error:', error);
            setError(error.message);
            showToast('Registration failed. Please try again.', 'error');
        }
    };

    return (
        <Container className="mt-5">
            <h2>{isNewUser ? 'Register' : 'Login'}</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={isNewUser ? handleRegister : handleLogin}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {isNewUser ? 'Register' : 'Login'}
                </Button>
            </Form>
            <Button variant="link" onClick={() => setIsNewUser(!isNewUser)}>
                {isNewUser ? 'Have an account? Login' : 'New user? Register here'}
            </Button>
            <ToastNotification />
        </Container>
    );
};

export default Login;
