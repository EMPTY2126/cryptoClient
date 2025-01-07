import React from 'react';
import { Box, Button,styled} from '@mui/material';
import { useNavigate } from 'react-router-dom';



const DepositButton = styled(Button)(({theme}) => ({
    backgroundImage:"linear-gradient(to bottom right, #F6851B, #904E10)",
    minHeight:"60.37px",
    minWidth:"230.26px",
    margin:"2%",
    borderRadius:"15px",
    color:"white",
    fontWeight:"700",
    '&:hover':{
            backgroundImage:"None",
            borderColor:"white",
            color:"white",                
            borderStyle:"solid",
            borderWidth: "2px",
    }        
}));

const WithdrawButton = styled(Button)(({theme}) =>({
    backgroundImage:"linear-gradient(to bottom right, #F6851B, #904E10)",
    minHeight:"60.37px",
    minWidth:"230.26px",
    margin:"2%",
    borderRadius:"15px",
    color:"white",
    fontWeight:"700",
    '&:hover':{
            backgroundImage:"None",
            borderColor:"white",
            color:"white",                
            borderStyle:"solid",
            borderWidth: "2px",
    }

}));

function DashMiddleFrame() {
  const navigate = useNavigate();
  const handleDeposit = ()=> {
        navigate('/deposit');
  }

  return (
    <Box style={{position:"absolute",backgroundColor:"#17153B",width:"85%",height:"350px",marginTop:"10%",marginLeft:"8%",borderRadius:"40px"}} sx={{filter:"drop-shadow(6px 6px 5px #F6851B)",zIndex:"19"}}>
                <Box style = {{display:"flex",marginTop:"2%"}}>
                        <Box style={{color:"#B3B3B3",width:"60%",fontSize:"35px",fontWeight:"700"}} sx={{fontFamily:"Inter",padding:"2%"}}>
                        Overall Portfolio
                        </Box>
                        <Box style={{display:"flex",width:"40%"}} sx={{paddingRight:"5%"}} > 
                                <DepositButton onClick={handleDeposit}>Deposit</DepositButton>
                                <WithdrawButton>Withdraw</WithdrawButton>
                        </Box>
                </Box>
                <Box style={{ display:"flex",margin:"8%",fontFamily:"Inter"}} sx={{justifyContent:"space-between"}}>
                        <Box style={{display:'flex'}}>
                                <Box>
                                        <Box style={{color:"#A6A6A6",display:"block",fontSize:"16px"}}>
                                                My Balance
                                        </Box>
                                        <Box style={{color:"#FFFFFF",display:"block",fontSize:"24px"}}>
                                        $ 234,123.00 
                                        </Box>
                                </Box>
                                <Box style={{color:"#00FF44",marginTop:"3%",fontSize:"16px"}}>
                                        ^6.58%
                                </Box>
                        </Box>
                        <Box style={{display:'flex'}}>
                                <Box>
                                        <Box style={{color:"#A6A6A6",display:"block",fontSize:"16px"}}>
                                                Investments
                                        </Box>
                                        <Box style={{color:"#FFFFFF",display:"block",fontSize:"24px"}}>
                                        $ 123,423.00
                                        </Box>
                                </Box>
                                <Box style={{color:"#00FF44",marginTop:"3%",fontSize:"16px"}}>
                                        ^2.58%
                                </Box>
                        </Box>
                        <Box style={{display:'flex'}}>
                                <Box>
                                        <Box style={{color:"#A6A6A6",display:"block",fontSize:"16px"}}>
                                                My Balance
                                        </Box>
                                        <Box style={{color:"#FFFFFF",display:"block",fontSize:"24px"}}>
                                        $ 234,123.00 
                                        </Box>
                                </Box>
                                <Box style={{color:"#FF0000",marginTop:"3%",fontSize:"16px"}}>
                                        ˇ7.34%
                                </Box>
                        </Box>
                </Box>
       </Box>
  )
}

export default DashMiddleFrame