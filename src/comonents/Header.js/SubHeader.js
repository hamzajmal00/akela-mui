import { Container } from '@mui/material'
import React, { Fragment } from 'react'
import { SubHeaderBody, SubHeaderContainer, SubHeaderImage, SubHeaderTitle } from './styleSubHeader'

export const SubHeader = () => {
    return (
        <Fragment>
            <Container maxWidth={false} disableGutters>
                <SubHeaderContainer>
                    <SubHeaderTitle variant='subHeaderTitle'>
                        Private Equity
                    </SubHeaderTitle>
                    <SubHeaderBody textAlign={'center'} variant='subHeaderBody'>
                        Explore how Akila is increasing efficiency during the due diligence process
                    </SubHeaderBody>
                    <img src='/images/line.png' />
                    <SubHeaderImage src='/images/h1.png' />
                </SubHeaderContainer>
            </Container>

        </Fragment>
    )
}
