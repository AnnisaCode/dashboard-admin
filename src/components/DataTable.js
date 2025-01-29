import React, { useState } from 'react';
import { Table, Card, Pagination, FormControl } from 'react-bootstrap';

const DataTable = () => {
    const data = [
        { id: 1, product: 'Product A', customer: 'John Doe', status: 'Pending' },
        { id: 2, product: 'Product B', customer: 'Jane Smith', status: 'Completed' },
        { id: 3, product: 'Product C', customer: 'Sam Wilson', status: 'Shipped' },
        { id: 4, product: 'Product D', customer: 'Anna Johnson', status: 'Pending' },
        { id: 5, product: 'Product E', customer: 'David Brown', status: 'Completed' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 2;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter(item =>
        item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>Recent Orders</Card.Title>
                <FormControl
                    type="text"
                    placeholder="Filter by status"
                    className="mb-3"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Customer</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.product}</td>
                                <td>{item.customer}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Pagination>
                    <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
                    <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                    <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
                </Pagination>
            </Card.Body>
        </Card>
    );
};

export default DataTable;
