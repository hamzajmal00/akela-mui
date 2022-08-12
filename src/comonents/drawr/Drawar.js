import { Close } from '@mui/icons-material'
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import React, { useContext } from 'react'
import { DrawarContext } from '../../App'
import { colors } from '../../theme'
import { AppBarLogin, AppBarRegister } from '../appbar/style'
import { SideBarActions } from './style'

export const Drawar = () => {
    const {drawrOpen, setdrawrOpen} = useContext(DrawarContext);
    return (
        <Drawer anchor="right" open={drawrOpen} PaperProps={{ 
            sx:{
                width:250,
                background: colors.primary,
                overflow:'unset',
                color: colors.white,
                borderRadius: '100px 0px 0px 0px',
                borderLeft: `1px solid ${colors.white}`
            }
         }}>
         <Close
         onClick={()=>setdrawrOpen(false)}
         sx={{
           fontSize: "2.5rem",
           color: colors.white,
           marginTop:'10px',
           marginLeft:'-30px',
         }}
       />
            <List sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <ListItemButton divider>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
                <ListItemButton divider>
                    <ListItemText>Categories</ListItemText>
                </ListItemButton>
                <ListItemButton divider>
                    <ListItemText>Products</ListItemText>
                </ListItemButton>
                <ListItemButton divider>
                    <ListItemText>About Us</ListItemText>
                </ListItemButton>
                <ListItemButton divider>
                    <ListItemText>Contact Us</ListItemText>
                </ListItemButton>
            </List>
            <SideBarActions>
            <AppBarLogin variant='contained'>Login</AppBarLogin>
            <AppBarRegister variant='outlined'>Register</AppBarRegister>
        </SideBarActions>
        </Drawer>
    )
}
