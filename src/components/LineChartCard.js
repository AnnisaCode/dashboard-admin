import React from 'react';
import { Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChartCard = ({ title, chartData }) => {
    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Line data={chartData} />
            </Card.Body>
        </Card>
    );
};

export default LineChartCard;
