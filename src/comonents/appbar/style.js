import { Box, Button, List, ListItemButton,  styled } from "@mui/material";

import { colors } from "../../theme";

export const AppBarContainer = styled(Box)(() =>({
    display:'flex',
    paddingTop:'1rem',
    justifyContent:'space-between'
}));

export const LogoImg = styled("img")(({src}) =>({
    src:`url(${src})`,
    width:'297px',
  
   
    '@media (max-width:330px)':{
        width:'100%',
    }
}));

export const AppBarNav = styled(List)(() =>({
    display:'flex',
    flexGrow:3,
    justifyContent:'center',
    '@media (max-width:825px)':{
        display:'none',
    }
}));


export const AppBarNavButon = styled(ListItemButton)(() =>({
    maxWidth:'fit-content',
    "&:hover":{
        background:colors.secondGradient,
        borderRadius:'25px'
    }
}));
export const AppBarActions = styled(List)(() =>({
    display:'flex',
    flexGrow:1,
    gap:'10px',
    '@media (max-width:1060px)':{
        display:'none',
    }
}));
export const AppBarLogin = styled(Button)(() =>({
    background:colors.secondGradient,
    borderRadius: '25px',
    width:'110px',
    height:'45px',
    padding:'16px 34px',
    fontFamily: 'Poppins',
    fontSize:'1rem',
    color:colors.white,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '76.69%',

}));

export const AppBarRegister = styled(Button)(() =>({
    border:`1px solid ${colors.lightBlue}`,
    borderRadius: '25px',
    fontFamily: 'Poppins',
    fontSize:'1rem',
    width:'110px',
    height:'45px',
    padding:'16px 34px',
    color:colors.white,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '76.69%',
    "&:hover":{
        background:colors.secondGradient,
    },

}));