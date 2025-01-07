import React from 'react';
import { Box } from '@mui/material';
import LeftPanel from './components/LeftPanel';
import DashTopFrame from './components/DashTopFrame';
// import TransacBottomFrame from './components/TransacBottomFrame';

function Transaction() {
  return (
    <Box sx={{display:"flex"}}>
        <LeftPanel/>
    <Box style={{position:"relative",width:"100%",height:"900px",objectFit:"contain",backgroundImage:"linear-gradient(to bottom right, #433D8B, #2E236C)"}} sx={{borderColor:"white",borderWidth:"20px",borderTopLeftRadius:"50px"}}>
        <DashTopFrame/>
        {/* <TransacBottomFrame/>     */}
    </Box>
    </Box>
  )
}

export default Transaction