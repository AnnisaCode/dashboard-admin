import React from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const LogoutButton = ({ setUser }) => {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error('Error logging out: ', error);
        }
    };

    return (
        <Button variant="danger" onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default LogoutButton;
