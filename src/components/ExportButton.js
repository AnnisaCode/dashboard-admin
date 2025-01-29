import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Button } from 'react-bootstrap';

const ExportButton = ({ data }) => {
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(dataBlob, 'data.xlsx');
    };

    return (
        <Button variant="info" onClick={exportToExcel} className="ml-2">
            <i className="fas fa-file-export"></i> Export to Excel
        </Button>
    );
};

export default ExportButton;
