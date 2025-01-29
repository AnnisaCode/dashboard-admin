import React from 'react';
import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ChartCard = ({ title, chartData }) => {
    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Bar data={chartData} />
            </Card.Body>
        </Card>
    );
};

export default ChartCard;
