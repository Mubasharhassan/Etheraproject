import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Date', minWidth: 170 },
  { id: 'code', label: 'Time', minWidth: 100 },
  {
    id: 'population',
    label: 'Location',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Total',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  ];

function createData(name, code, population, size) {
  return { name, code, population, size };
}

const rows = [
  createData('05/20/2022', '8.00 AM', 'Ethera Irvine, Room O', '1 hour'),
  createData('05/20/2022', '10.00 AM','Ethera Irvine, Room O', '1 hour'),
  createData('05/16/2022', '3.00 PM', 'Telehealth | Zoom', '2.30 hours'),
  createData('05/15/2022', '8.00 AM', 'Ethera Irvine, Room O', '1 hour'),
  createData('05/06/2022', '8.00 AM', 'Ethera Irvine, Room O', '1 hour'),
  createData('05/20/2022', '8.00 AM', 'Ethera Irvine, Room O', '1 hour'),
  createData('05/20/2022', '8.00 AM', 'Ethera Irvine, Room O', '1 hour'),
  createData('05/20/2022', '8.00 AM', 'Ethera Irvine, Room O', '1 hour'),
  createData('05/20/2022', '8.00 AM', 'Ethera Irvine, Room O', '1 hour'),
  createData('05/20/2022', '8.00 AM', 'Ethera Irvine, Room O', '1 hour'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden'}}>
      <TableContainer sx={{ maxHeight: 440 , }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10,15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
