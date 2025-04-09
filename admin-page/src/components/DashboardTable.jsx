import React from 'react';
import { DataGrid } from '@mui/x-data-grid';



function DashboardTable({ tableData }) {
    const columns = [
        { field: 'name', headerName: 'Customer Name', width: 150 },
        { field: 'company', headerName: 'Company', width: 150 },
        { field: 'orderValue', headerName: 'Order Value', width: 120, valueFormatter: ({ value }) => `$${value}` },
        { field: 'orderDate', headerName: 'Order Date', width: 120 },
        { field: 'status', headerName: 'Status', width: 100 },
    ];
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={tableData}
                columns={columns}
                pageSizeOptions={[5, 10, 20]}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                sortingOrder={['asc', 'desc']}
            />
        </div>
    );
}

export default DashboardTable;
