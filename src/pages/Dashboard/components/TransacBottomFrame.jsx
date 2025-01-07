import { Box,Button,styled } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CatSelButton = styled(Button)(({ theme }) => ({
    color:"white",
    width:"5%",
    marginLeft:"2%",
    height:"10%",
    textDecoration:"None",
    '&:hover':{
        color:"#F6851B",
        textDecoration:"underline",
    },
    '&:clicked':{
        color:"#F6851B",
        textDecoration:"underline",
        
    }
}));


function createData(
  name,
  date,
  invoice,
  amount,
  status,
  action
) {
  let statusLabel;
  if (status === 1) {
    statusLabel = 'Receive';
  } else if (status === 0) {
    statusLabel = 'Transfer';
  } else if (status === -1) {
    statusLabel = 'Sent';
  }
  return { name, date, invoice, amount, status: statusLabel, action };
}


  
  const rows = [
    createData('John Doe', '21-March-2025','OP01212278' , 640, 0,"details"),
    createData('John Doe', '21-March-2025','OP01212278' , 640, 1,"details"),
    createData('John Doe', '21-March-2025','OP01212278' , 640, -1,"details"),
    createData('John Doe', '21-March-2025','OP01212278' , 640, 1,"details"),
    createData('John Doe', '21-March-2025','OP01212278' , 640, 0,"details"),
    createData('John Doe', '21-March-2025','OP01212278' , 640, 0,"details"),
    createData('John Doe', '21-March-2025','OP01212278' , 640, 1,"details"),
    createData('John Doe', '21-March-2025','OP01212278' , 640, -1,"details"),
    createData('John Doe', '21-March-2025','OP01212278' , 640, 1,"details"),
    createData('John Doe', '21-March-2025','OP01212278' , 640, 0,"details"),
    
  ];

function TransacBottomFrame() {
  return (
    <Box style={{marginTop:"15%"}}>
        <Box style={{height:"10%",display:"flex"}}>
            <CatSelButton>All</CatSelButton>
            <CatSelButton>Received</CatSelButton>
            <CatSelButton>Transfer</CatSelButton>
            <CatSelButton>Payments</CatSelButton>
            <CatSelButton>Withdraw</CatSelButton>
        </Box>
        <Box style={{backgroundColor:"yellow",height:"80%",margin:"2%",borderRadius:"10px"}}>
            
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:"#D9D9D9"}}>
            <TableCell >Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Invoice</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.invoice}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell style={{color:"#E4761B"}} align="right">{row.status}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
            </Box>

    </Box>
  )
}

export default TransacBottomFrame