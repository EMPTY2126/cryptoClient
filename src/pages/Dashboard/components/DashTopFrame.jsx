import React from 'react';
import { Box,Button } from '@mui/material';
import userPic from '../../../assets/userPic.png';
import bellIcon from '../../../assets/bellIcon.png';
import weatherIcon from '../../../assets/weatherIcon.png';
import Avatar from '@mui/material/Avatar';
import dashTopImgAsset from '../../../assets/topframeBgDashPage.png';
function DashTopFrame() {
  return (
    <Box style={{position:"absolute",display:"flex",width: "100%",height: "200px",backgroundImage:`url(${dashTopImgAsset})`,backgroundBlendMode:"luminosity"}} sx={{borderTopLeftRadius:"50px",backgroundRepeat:"no-repeat, repeat"}}>
        {/* Weather Stats */}
        <Box style={{width:"20%",display:"flex",marginLeft:"6%",marginTop:"5%",color:"white"}}>
                <Box><img src={weatherIcon} alt="weatherIcon"></img></Box>
                <Box style={{marginLeft:"4%",marginTop:"4%",fontFamily:"Inter"}}>Friday, 11 September 2024</Box>

        </Box>

        <Box style={{width:"50%"}}></Box>

        <Box style={{width:"20%",display:"flex",right:"0"}} sx={{justifyContent:"space-between"}}>
                
                <Button><img src={bellIcon} alt="bellIcon"></img></Button>
                {/* <Button><img src={userPic} alt="userPic"></img></Button> */}
                <Avatar  alt="Remy Sharp"  src={userPic}  sx={{ width: 74, height: 74, marginTop:"17%"}}/>
                <Box style={{fontFamily:"Inter",color:"white",marginTop:"25%"}}>
                        <Box style={{ fontSize:"20px"}} sx={{textAlign:"center"}}> Username</Box>
                        <Box style={{fontSize:"14px",color:"#B0B0B0"}}>Client UID: 3459178</Box>                        
                </Box>
                
                
        </Box>
        </Box>
  )
}

export default DashTopFrame