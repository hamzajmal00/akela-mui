import { createTheme } from "@mui/material";

export const colors ={

    primary:'#04033A',
    white:'#ffff',
    blue:'#3134DB',
    
    gray:"rgba(255, 255, 255, 0.25)",
    whiteGray:'#E3E3E3',
    lightWhiteGray:'#E7E7E7',
    mlsGray:'#AAAAAA',
    darkGray:'#3C3C3C',
    lightDarkGray:'#4B4B4B',
    
    darkBlue:'#393091',
    lightBlue:'#009EE1',
    
    MainGradient:"linear-gradient(327.07deg, #13133A -1612.51%, #3134DB -203.13%, #8665CB 2728.51%, #3134db 5578.18%)",
    secondGradient:'linear-gradient(90.99deg, #3134DB 0.83%, #009EE1 99.4%)',


    
}
const theme = createTheme({
    palette: {
        primary: {
            main:'#04033A',
        },
        secondary: {
            main: '#ba000d',
          },
          blue: {
            main: '#3134DB', 
          },
          darkBlue: {
            main: '#393091', 
          },
          lightBlue: {
            main: '#009EE1',
          },
          white: {
            main: '#FFFF', 
          },
          gray: {
            main:"rgba(255, 255, 255, 0.25)", 
          },
          whiteGray: {
            main:'#E3E3E3', 
          },
          lightWhiteGray: {
            main:'#E7E7E7', 
          },
          mediumLightGray: {
            main:'#AAAAAA', 
          },
          darkGray: {
            main:'#3C3C3C', 
          },
          lightDarkGray: {
            main:'#4B4B4B', 
          },

      },
      typography:{
        
        fontFamily: ['Raleway', 'Poppins', 'sans-serif'].join(','),
        subHeaderTitle:{
          fontFamily: 'Raleway',
          fontSize:'2.5rem',
          color:colors.lightWhiteGray,
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '113.69%',
        },
        subHeaderBody:{
          fontFamily: 'Raleway',
          fontSize:'1.25rem',
          color:colors.lightWhiteGray,
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '137.19%',
        },
        tabMenu:{
          fontFamily: 'Raleway',
          fontSize:'1.5rem',
          color:colors.white,
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '113.69%',
        },
        tabMenuActive:{
          fontFamily: 'Raleway',
          fontSize:'1.5rem',
          color:colors.lightBlue,
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '113.69%',
    
        },
        tabContentBody:{
          fontFamily: 'Raleway',
          fontSize:'1.125rem',
          color:colors.white,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '149.19%',
    
        },
        h2:{
          fontFamily: 'Raleway',
          fontSize:'2rem',
          color:colors.lightWhiteGray,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '88.19%',
        },
        h4:{
          fontFamily: 'Poppins',
          fontSize:'1rem',
          color:colors.whiteGray,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '76.69%',
        },
        heroHeading:{
          fontFamily: 'Raleway',
          fontSize:'4.8rem',
          color:colors.whiteGray,
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight:'113.69%',
        },
        sectionHeading:{
          fontFamily: 'Raleway',
          fontSize:'4rem',
          color:colors.whiteGray,
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight:'88.19%',
        },
        sectionSubHeading:{
          fontFamily: 'Raleway',
          fontSize:'2.6rem',
          color:colors.lightWhiteGray,
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight:'88.19%',
        },
        featureTitle:{
          fontFamily: 'Raleway',
          fontSize:'1.6rem',
          color:colors.white,
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight:'76.69%',
        },
        postTitle:{
          fontFamily: 'Raleway',
          fontSize:'1.6rem',
          color:colors.darkGray,
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight:'75.69%',
        },
        postBody:{
          fontFamily: 'Raleway',
          fontSize:'1.4rem',
          color:colors.lightDarkGray,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight:'137.69%',
        },
        getStartHeading:{
          fontFamily: 'Raleway',
          fontSize:'2.2rem',
          color:colors.white,
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight:'88.22%',
        },
        footerBody:{
          fontFamily: 'Raleway',
          fontSize:'1rem',
          color:colors.lightWhiteGray,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight:'137.19%',
        },
        footerHeading:{
          fontFamily: 'Raleway',
          fontSize:'1.6rem',
          color:colors.whiteGray,
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight:'91.5%',
        },
        footerLink:{
          fontFamily: 'Poppins',
          fontSize:'14px',
          color:colors.whiteGray,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight:'91.5%',
        },
      },
      components:{
        MuiContainer: {
          styleOverrides: {
            maxWidthLg: {
              maxWidth: '1111px',
            }
          }
        },
      },
});

export default theme
