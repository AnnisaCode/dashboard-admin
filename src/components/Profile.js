import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Profile = ({ user }) => {
    return (
        <Container className="mt-5">
            <Card>
                <Card.Body>
                    <Card.Title>Profile</Card.Title>
                    <Card.Text>
                        <strong>Email:</strong> {user.email}
                    </Card.Text>
                    <Card.Text>
                        <strong>User ID:</strong> {user.uid}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Profile;
