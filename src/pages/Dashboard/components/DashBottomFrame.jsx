import React from 'react';
import { Box,styled,Button } from '@mui/material';

const LendButton = styled(Button)(({theme}) =>({
    backgroundColor:"#17153B",
    height:"70%",
    width:"46%",
    borderColor:"#F6851B",
    borderStyle:"solid",
    borderWidth: "2px",
    borderRadius:"15px",
    color:"#F6851B",
    fontWeight:"700",
    margin:"2%",
    transition:"background-color 3s",
    '&:hover':{
            backgroundColor:"#F6851B",
            color:"white",   
            fontSize:"32px",             
    },
    '&:focus&:active':{
            backgroundColor:"None",
            transition:"None",
    }       
}));


const BorrowButton = styled(Button)(({theme}) =>({
    backgroundColor:"#17153B",
    height:"70%",
    width:"46%",
    borderColor:"#F6851B",
    borderStyle:"solid",
    borderWidth: "2px",
    borderRadius:"15px",
    color:"#F6851B",
    fontWeight:"700",
    margin:"2%",
    transition:"background-color 3s",
    '&:hover':{
            backgroundColor:"#F6851B",
            color:"white",
            fontSize:"32px",                
    },
    '&:focus&:active':{
            backgroundColor:"None",
            transition:"None",
    }        
}));

function DashBottomFrame() {
  return (
    <Box style={{position:"absolute",width:"95%",height:"42%",margin:"2%",marginTop:"32%"}} >
                <LendButton>Lend Eth</LendButton>
                <BorrowButton>Borrow Eth</BorrowButton>
    </Box>
  )
}

export default DashBottomFrame