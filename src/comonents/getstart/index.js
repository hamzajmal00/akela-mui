import { Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { AppBarActions } from '../appbar/style'
import { GetStartActions, GetStartContainer, GetStartDemoBtn, GetStartImg, GetStartRegisterBtn } from './style'

export const GetStart = () => {
    return (
        <Fragment>
            <GetStartContainer src="/images/getstart.png">
                <GetStartImg src='/images/svgLogo.svg' />
                <Typography textAlign={'center'} variant='getStartHeading'>
                    Getting Started with Akila Analytics
                </Typography>
                <GetStartActions>
                    <GetStartDemoBtn variant='contained'>REQUEST A DEMO</GetStartDemoBtn>
                    <GetStartRegisterBtn variant='outlined'>REGISTER</GetStartRegisterBtn>
                </GetStartActions>
            </GetStartContainer>
        </Fragment>
    )
}
