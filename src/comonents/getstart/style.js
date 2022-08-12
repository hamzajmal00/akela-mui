import { Box, Button, List, styled } from "@mui/material";
import { colors } from "../../theme";

export const GetStartContainer = styled(Box)(({src}) =>({
    marginTop:"5rem",
    paddingTop:"5rem",
    height:"300px",
    background:`url(${src})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'bottom',
    display:'flex',
    flexDirection:'column',
    alignItems:"center",
    gap:"2rem",
    justifyContent:'center'
}));

export const GetStartImg = styled('img')(() =>({
    width: '100%',
    height:'61px'
    
}));

export const GetStartDemoBtn = styled(Button)(() =>({
    background:colors.secondGradient,
    borderRadius: '25px',
    width:'251px',
    height:'45px',
    padding:'16px 34px',
    fontFamily: 'Poppins',
    fontSize:'1rem',
    color:colors.white,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '76.69%',
    
}));
export const GetStartRegisterBtn = styled(Button)(() =>({
    border:`1px solid ${colors.lightBlue}`,
    borderRadius: '25px',
    fontFamily: 'Poppins',
    fontSize:'1rem',
    width:'100%',
    maxWidth:'175px',
    height:'45px',
    padding:'16px 34px',
    color:colors.white,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '76.69%',
    "&:hover":{
        background:colors.secondGradient,
    },    
    '@media(max-width:600px)':{
        maxWidth:'251px',
    }
    
}));

export const GetStartActions = styled(List)(() =>({
    display:'flex',
    flexGrow:1,
    gap:'10px',
    '@media(max-width:600px)':{
        flexDirection:'column',
    }
}));
