import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingPlaceholder = () => (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" variant="primary" />
    </div>
);

export default LoadingPlaceholder;
