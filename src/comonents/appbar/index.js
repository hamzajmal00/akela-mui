import { Typography } from '@mui/material'
import React, { Fragment, useContext } from 'react'
import { AppBarActions, AppBarContainer, AppBarLogin, AppBarNav, AppBarNavButon, AppBarNavList, AppBarRegister, LogoImg } from './style'
import SegmentIcon from '@mui/icons-material/Segment';
import { DrawarContext } from '../../App';
export const AppBar = () => {
    const { setdrawrOpen } = useContext(DrawarContext);
    return (
        <Fragment>
            <AppBarContainer>
                <LogoImg src="/images/svgLogo.svg" />
                <AppBarNav>
                    <AppBarNavButon component="a" href="#simple-list">
                        <Typography variant='h4'>About</Typography>
                    </AppBarNavButon>
                    <AppBarNavButon component="a" href="#simple-list">
                        <Typography variant='h4'>Use Cases</Typography>
                    </AppBarNavButon>
                    <AppBarNavButon component="a" href="#simple-list">
                        <Typography variant='h4'>Demos</Typography>
                    </AppBarNavButon>
                    <AppBarNavButon component="a" href="#simple-list">
                        <Typography variant='h4'>Pricing</Typography>
                    </AppBarNavButon>
                    <AppBarNavButon component="a" href="#simple-list">
                        <Typography variant='h4'>Contact</Typography>
                    </AppBarNavButon>
                </AppBarNav>
                <AppBarActions>
                    <AppBarLogin variant='contained'>Login</AppBarLogin>
                    <AppBarRegister variant='outlined'>Register</AppBarRegister>
                </AppBarActions>
                <SegmentIcon
                    onClick={() => setdrawrOpen(true)}
                    sx={{ display: 'block', color: '#FFF', '@media (min-width:825px)': { display: 'none' }, }}
                />
            </AppBarContainer>


        </Fragment>
    )
}
