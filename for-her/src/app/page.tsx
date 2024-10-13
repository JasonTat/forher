'use client';
import { useState, useEffect } from 'react';
import Image from 'react';

//styles
import styles from "../../styles/page.module.css";
import homePageStyles from "../../styles/home-page.module.css";

//custom components
import Navigation from "../../components/Navigation";

import CryingBear from '../../public/img/reactions/43ffe16a0deb6681d0e4074dfda2dc0b.gif'

//MUI components
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Home() {


  const [answer, setAnswer] = useState('');

  function handleYesClick() {
    setAnswer('yes');
  }

  function handleNoLoveClick() {
    setAnswer('no');
  }

  function handleResetClick(){
      setAnswer('reset');
  }


  return (

    <>
      <Navigation />





        <Box component="section" className={homePageStyles.container}>

          <Grid container spacing={2} >
            <Grid display="flex" justifyContent="center" alignItems="center" size={12}>
              <h2>Hi Karen!</h2>
            </Grid>
            <Grid display="flex" justifyContent="center" alignItems="center" size={12}>
              <Typography variant="body2">
                Click on some of these, I built them for you :)
              </Typography>
            </Grid>
          </Grid>
        </Box>
        
        <Box component='section' className={homePageStyles.container2}>
          <Stack spacing={1}
            sx={{justifyContent: 'center', alignItems: 'center'}}
            >
            
            <Box component='div'>
            Do you love me?
            </Box>

            <Box className={homePageStyles.twoButtons}>

              <Box component='div'>
                <Button
                 sx={{
                  color: 'white',
                  fontWeight: '700',
                  backgroundColor: '#e77ed0',
                  marginRight: '2px', 
                  '&:hover': {
                    backgroundColor: '#914186'
                  }
                }} 
                className={homePageStyles.yesButton}
                 onClick={() => handleYesClick()}>
                  Yes
                </Button>
              </Box>

              <Box component='div'>
                <Button
                 sx={{
                  color: 'black',
                  fontWeight: '700',
                  backgroundColor: 'red',
                  marginLeft: '2px',
                  '&:hover': {
                    backgroundColor: 'darkred'
                  }              
                }}
                 onClick={() => handleNoLoveClick()}>
                  No
                </Button>
              </Box>
            </Box>


            <Box component='div'>
              <img src='https://i.pinimg.com/originals/43/ff/e1/43ffe16a0deb6681d0e4074dfda2dc0b.gif' className={homePageStyles.sadBear}/>
            </Box>
          </Stack>          
        </Box>

        <Box component='section'>
         <Box component='div'>
          <Typography variant='body2'>
            {answer}
          </Typography>
         </Box>
        </Box>





    </>



  );
}
