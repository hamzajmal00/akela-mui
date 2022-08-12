import { Grid, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { colors } from '../../theme'
import { TabContentBody, TabContentTitle, TabsContainer, TabsNav, TabsNavButon } from './style'

export const ContentTabs = () => {
    return (
        <Fragment>
            <TabsContainer>
                <TabsNav>
                    <TabsNavButon component="a" href="#Challenges">
                        <Typography sx={{ '&:hover': { color: `${colors.white}` } }} variant='tabMenuActive'>Challenges</Typography>
                    </TabsNavButon>
                    <TabsNavButon component="a" href="#Oppurtunities">
                        <Typography variant='tabMenu'>Oppurtunities</Typography>
                    </TabsNavButon>
                    <TabsNavButon component="a" href="#Advantage">
                        <Typography variant='tabMenu'>Akila Advantage</Typography>
                    </TabsNavButon>
                    <TabsNavButon component="a" href="#simple-list">
                        <Typography variant='tabMenu'>Getting Started</Typography>
                    </TabsNavButon>

                </TabsNav>

            </TabsContainer>
            <Grid sx={{ marginTop: '60px' }} container spacing={2}>
                <Grid item lg={3} md={3} sm={12} id="Challenges">
                    <TabContentTitle>
                        <Typography variant='subHeaderTitle'>
                            Challenges
                        </Typography>
                    </TabContentTitle>
                </Grid>
                <Grid item lg={9} md={9} sm={12}>
                    <TabContentBody>
                        <Typography variant='tabContentBody'>
                            Elit sequi molestiae numquam laboriosam eos? Ea dolorem quis minima ipsa minima? Asperiores saepe ipsum necessitatibus incidunt labore Obcaecati cupiditate rem quam nam quasi eaque aliquam voluptate enim. In a vitae aspernatur voluptates facilis? Ipsam eius eveniet odio doloribus cupiditate? Exercitationem placeat commodi labore obcaecati eveniet A dolorum saepe laborum voluptatem temporibus Atque at doloribus voluptate doloribus commodi. Veritatis blanditiis accusantium nihil architecto vero Laborum molestiae vero doloribus consequatur hic, ipsa. Ad quidem laborum assumenda maxime debitis nam. Error laborum repellendus laborum blanditiis velit repellendus? Repellendus nobis quis pariatur quis nulla aut modi? Amet reiciendis quaerat soluta minus exercitationem at!
                            <br></br><br></br>
                            Elit sequi molestiae numquam laboriosam eos? Ea dolorem quis minima ipsa minima? Asperiores saepe ipsum necessitatibus incidunt labore Obcaecati cupiditate rem quam nam quasi eaque aliquam voluptate enim. In a vitae aspernatur voluptates facilis? Ipsam eius eveniet odio doloribus cupiditate?

                        </Typography>

                    </TabContentBody>
                </Grid>
            </Grid>
            <Grid sx={{ marginTop: '60px' }} container spacing={2}>
                <Grid item lg={3} md={3} sm={12} id="Oppurtunities">
                    <TabContentTitle>
                        <Typography variant='subHeaderTitle'>
                            Oppurtunities
                        </Typography>
                    </TabContentTitle>
                </Grid>
                <Grid item lg={9} md={9} sm={12}>
                    <TabContentBody>
                        <Typography variant='tabContentBody'>
                            Elit sequi molestiae numquam laboriosam eos? Ea dolorem quis minima ipsa minima? Asperiores saepe ipsum necessitatibus incidunt labore Obcaecati cupiditate rem quam nam quasi eaque aliquam voluptate enim. In a vitae aspernatur voluptates facilis? Ipsam eius eveniet odio doloribus cupiditate? Exercitationem placeat commodi labore obcaecati eveniet A dolorum saepe laborum voluptatem temporibus Atque at doloribus voluptate doloribus commodi. Veritatis blanditiis accusantium nihil architecto vero Laborum molestiae vero doloribus consequatur hic, ipsa. Ad quidem laborum assumenda maxime debitis nam. Error laborum repellendus laborum blanditiis velit repellendus? Repellendus nobis quis pariatur quis nulla aut modi? Amet reiciendis quaerat soluta minus exercitationem at!
                            <br></br><br></br>
                            Elit sequi molestiae numquam laboriosam eos? Ea dolorem quis minima ipsa minima? Asperiores saepe ipsum necessitatibus incidunt labore Obcaecati cupiditate rem quam nam quasi eaque aliquam voluptate enim. In a vitae aspernatur voluptates facilis? Ipsam eius eveniet odio doloribus cupiditate?

                        </Typography>

                    </TabContentBody>
                </Grid>
            </Grid>
            <Grid sx={{ marginTop: '60px' }} container spacing={2}>
                <Grid item lg={3} md={3} sm={12} id='Advantage'>
                    <TabContentTitle>
                        <Typography variant='subHeaderTitle'>
                            Akila Advantage
                        </Typography>
                    </TabContentTitle>
                </Grid>
                <Grid item lg={9} md={9} sm={12}>
                    <TabContentBody>
                        <Typography variant='tabContentBody'>
                            Elit sequi molestiae numquam laboriosam eos? Ea dolorem quis minima ipsa minima? Asperiores saepe ipsum necessitatibus incidunt labore Obcaecati cupiditate rem quam nam quasi eaque aliquam voluptate enim. In a vitae aspernatur voluptates facilis? Ipsam eius eveniet odio doloribus cupiditate? Exercitationem placeat commodi labore obcaecati eveniet A dolorum saepe laborum voluptatem temporibus Atque at doloribus voluptate doloribus commodi. Veritatis blanditiis accusantium nihil architecto vero Laborum molestiae vero doloribus consequatur hic, ipsa. Ad quidem laborum assumenda maxime debitis nam. Error laborum repellendus laborum blanditiis velit repellendus? Repellendus nobis quis pariatur quis nulla aut modi? Amet reiciendis quaerat soluta minus exercitationem at!
                            <br></br><br></br>
                            Elit sequi molestiae numquam laboriosam eos? Ea dolorem quis minima ipsa minima? Asperiores saepe ipsum necessitatibus incidunt labore Obcaecati cupiditate rem quam nam quasi eaque aliquam voluptate enim. In a vitae aspernatur voluptates facilis? Ipsam eius eveniet odio doloribus cupiditate?

                        </Typography>

                    </TabContentBody>
                </Grid>

            </Grid>

            <Grid sx={{ marginTop: '60px' }} container spacing={2}>
                <Grid item lg={3} md={3} sm={12} id='Advantage'>
                    <TabContentTitle>
                        <Typography variant='subHeaderTitle'>
                            Akila Advantage
                        </Typography>
                    </TabContentTitle>
                </Grid>
                <Grid item lg={9} md={9} sm={12}>
                    <TabContentBody>
                        <Typography variant='tabContentBody'>
                            Elit sequi molestiae numquam laboriosam eos? Ea dolorem quis minima ipsa minima? Asperiores saepe ipsum necessitatibus incidunt labore Obcaecati cupiditate rem quam nam quasi eaque aliquam voluptate enim. In a vitae aspernatur voluptates facilis? Ipsam eius eveniet odio doloribus cupiditate? Exercitationem placeat commodi labore obcaecati eveniet A dolorum saepe laborum voluptatem temporibus Atque at doloribus voluptate doloribus commodi. Veritatis blanditiis accusantium nihil architecto vero Laborum molestiae vero doloribus consequatur hic, ipsa. Ad quidem laborum assumenda maxime debitis nam. Error laborum repellendus laborum blanditiis velit repellendus? Repellendus nobis quis pariatur quis nulla aut modi? Amet reiciendis quaerat soluta minus exercitationem at!
                            <br></br><br></br>
                            Elit sequi molestiae numquam laboriosam eos? Ea dolorem quis minima ipsa minima? Asperiores saepe ipsum necessitatibus incidunt labore Obcaecati cupiditate rem quam nam quasi eaque aliquam voluptate enim. In a vitae aspernatur voluptates facilis? Ipsam eius eveniet odio doloribus cupiditate?

                        </Typography>

                    </TabContentBody>
                </Grid>

            </Grid>

        </Fragment>
    )
}
