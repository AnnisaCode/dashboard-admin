import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ChartCard from './ChartCard';
import LineChartCard from './LineChartCard';
import DoughnutChartCard from './DoughnutChartCard';
import PieChartCard from './PieChartCard';
import DataTable from './DataTable';
import InputModal from './InputModal';
import ToastNotification, { showToast } from './ToastNotification';
import LoadingPlaceholder from './LoadingPlaceholder';
import ExportButton from './ExportButton';

const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(75,192,192,0.4)',
        },
    ],
};

const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Revenue',
            data: [80, 72, 75, 90, 85, 77],
            borderColor: 'rgba(75,192,192,1)',
            fill: false,
        },
    ],
};

const doughnutChartData = {
    labels: ['Electronics', 'Clothing', 'Groceries'],
    datasets: [
        {
            label: 'Category Sales',
            data: [300, 150, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
    ],
};

const pieChartData = {
    labels: ['North', 'South', 'East', 'West'],
    datasets: [
        {
            label: 'Regional Sales',
            data: [120, 90, 100, 80],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        },
    ],
};

const tableData = [
    { id: 1, product: 'Product A', customer: 'John Doe', status: 'Pending' },
    { id: 2, product: 'Product B', customer: 'Jane Smith', status: 'Completed' },
    { id: 3, product: 'Product C', customer: 'Sam Wilson', status: 'Shipped' },
];

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000); // Simulasi loading data
    }, []);

    const handleClose = () => {
        setShowModal(false);
        showToast("Order added successfully!", "success");
    };
    const handleShow = () => setShowModal(true);

    if (loading) {
        return <LoadingPlaceholder />;
    }

    return (
        <Container fluid>
            <Row className="mt-4">
                <Col md={4}>
                    <ChartCard title="Sales Data" chartData={chartData} />
                </Col>
                <Col md={4}>
                    <LineChartCard title="Revenue Data" chartData={lineChartData} />
                </Col>
                <Col md={4}>
                    <DoughnutChartCard title="Category Sales" chartData={doughnutChartData} />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={6}>
                    <PieChartCard title="Regional Sales" chartData={pieChartData} />
                </Col>
                <Col md={6}>
                    <DataTable />
                    <Button variant="success" className="mt-3" onClick={handleShow}>
                        <i className="fas fa-plus"></i> Add New Order
                    </Button>
                    <ExportButton data={tableData} />
                </Col>
            </Row>
            <InputModal show={showModal} handleClose={handleClose} />
            <ToastNotification />
        </Container>
    );
};

export default Dashboard;
