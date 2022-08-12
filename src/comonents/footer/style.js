import { Box, List, styled } from "@mui/material";
import { colors } from "../../theme";

export const FooterContianer = styled(Box)(() =>({
  
    backgroundRepeat:'no-repeat',
    height:'fit-content',
    paddingTop:"7rem"
    
}));

export const FooterAbout = styled(Box)(() =>({
    display:'flex',
    flexDirection:'column',
    gap:'45px'
}));
export const FooterLogo = styled("img")(() =>({
    width:"125px",
    height:"34px"
}));

export const FooterMenu = styled(Box)(() =>({
    display:'flex',
    flexDirection:'column',
    gap:'45px'
}));
export const FooterMenuList = styled(List)(() =>({
    display:'flex',
    flexDirection:'column',
    gap:'22px'
}));
export const FooterMenuIcon = styled(List)(() =>({
    display:'flex',
    gap:'24px'
}));

export const EndFooter = styled(Box)(() =>({
    borderTop:`1px solid ${colors.lightWhiteGray}`,
    height:'100px',
    marginTop:"43px",
    paddingTop:'15px'
}));
