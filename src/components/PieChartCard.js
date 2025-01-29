import React from 'react';
import { Card } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const PieChartCard = ({ title, chartData }) => {
    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Pie data={chartData} />
            </Card.Body>
        </Card>
    );
};

export default PieChartCard;
