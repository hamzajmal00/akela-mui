import { Box, Button, List, ListItemButton,  styled, Typography } from "@mui/material";



export const SubHeaderContainer = styled(Box)(({theme}) =>({
    display:'flex',
    flexDirection:'column',
    paddingTop:'1rem',
    alignItems:'center',

}));

export const SubHeaderTitle = styled(Typography)(() =>({
    marginTop:'3rem',
}));

export const SubHeaderBody = styled(Typography)(() =>({
    marginTop:'1rem',
    paddingBottom:'1rem'
}));

export const SubHeaderImage = styled('img')(() =>({
   
    marginTop:'1rem',
    paddingBottom:'1rem',
    width:'100%',
}));