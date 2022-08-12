import { Box, List, ListItemButton } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../theme";

export const TabsContainer = styled(Box)(() =>({
    display:'flex',
    borderBottom:'1px solid #5A5A5A',
    marginTop:'60px'
    
}));

export const TabsNav = styled(List)(() =>({
    display:'flex',
    overflow:'hidden',
    '@media (max-width:825px)':{
        flexDirection:'column',
    }
    
}));


export const TabsNavButon = styled(ListItemButton)(() =>({

    "&:hover":{
        background:colors.secondGradient,
        borderRadius:'25px'
    }
}));

export const TabContentTitle = styled(Box)(() =>({
    display:'flex',
    
}));
export const TabContentBody = styled(Box)(() =>({
    display:'flex',
    
}));