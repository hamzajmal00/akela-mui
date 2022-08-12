import { Box, Button, ThemeProvider, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { createContext, useState } from 'react'
import theme, { colors } from "../src/theme"
import { AppBar } from './comonents/appbar'
import { Drawar } from './comonents/drawr/Drawar'
import { Footer } from './comonents/footer'
import { GetStart } from './comonents/getstart'
import { SubHeader } from './comonents/Header.js/SubHeader'
import { ContentTabs } from './comonents/tabs'

export const DrawarContext = createContext();

const App = () => {
  const [drawrOpen, setdrawrOpen] = useState(false);
  const value = {
    drawrOpen,
    setdrawrOpen
  }
  return (
    <ThemeProvider theme={theme}>
      <DrawarContext.Provider value={value}>
        <Box sx={{ background: colors.primary, width: '100%', }}>
          <Container maxWidth={'lg'}>
            <AppBar />
          </Container>

          <SubHeader />

          <Container maxWidth={'lg'}>
            <ContentTabs />
          </Container>
          <GetStart />
          <Box sx={{ background: 'url(/images/footer-bg.png)', backgroundRepeat: 'no-repeat', marginTop: '100px' }}>
            <Container maxWidth={'lg'}>
              <Footer />
              <Drawar />
            </Container>
          </Box>

        </Box>
      </DrawarContext.Provider>
    </ThemeProvider>
  )
}
export default App