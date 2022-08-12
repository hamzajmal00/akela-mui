import { Grid, ListItemText, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { EndFooter, FooterAbout, FooterContianer, FooterLogo, FooterMenu, FooterMenuIcon, FooterMenuList } from './style'

export const Footer = () => {
    return (
        <Fragment>
            <FooterContianer>
                <Grid container spacing={20}>
                    <Grid item lg={4} sm={12}>
                        <FooterAbout>
                            <FooterLogo src='/images/footer-logo.svg' />
                            <Typography variant='footerBody'>
                                Volutpat pellentesque molestie sed erat porta scelerisque massa augue. Elementum in malesuada sit nullam tortor consequat, elit quisque enim. Nisl, nec in consectetur felis odio. Volutpat pellentesque molestie sed erat porta scelerisque massa augue. Elementum in

                            </Typography>

                        </FooterAbout>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                        <FooterMenu>
                            <Typography variant='footerHeading'>
                                Useful Links
                            </Typography>
                            <FooterMenuList>
                                <Typography variant='footerLink'>
                                    About Us
                                </Typography>
                                <Typography variant='footerLink'>
                                    Privacy Policy
                                </Typography>
                                <Typography variant='footerLink'>
                                    Terms & Condition
                                </Typography>

                            </FooterMenuList>
                        </FooterMenu>
                    </Grid>
                    <Grid item lg={4} sm={6}>
                        <FooterMenu>
                            <Typography variant='footerHeading'>
                                Useful Links
                            </Typography>
                            <FooterMenuIcon>
                                <img src='/images/youtube.png' />
                                <img src='/images/insta.png' />
                                <img src='/images/linked.png' />

                            </FooterMenuIcon>
                        </FooterMenu>
                    </Grid>
                </Grid>
                <EndFooter>
                    <Typography variant='footerBody'>
                        All Rights Reserved
                    </Typography>
                </EndFooter>
            </FooterContianer>
        </Fragment>
    )
}
