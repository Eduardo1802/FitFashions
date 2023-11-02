import { Box } from '@mui/material';
import React from 'react';
import logoLight from './logo.png'

export function AnimatedIcon(props){

    // const {isDarkMode} = props;
    
  
    const styles = `
    .contenedor-animate{
      position: relative;
    }
  
    .moneda-animate{
        background: transparent;
        width: 60px;
        height: 60px;
        position: relative;
        border-radius: 20%;
        // animation: salto-animate 0.8s infinite;
    }
  
    .moneda-animate::before{
        content: '';
        display: inline-block;
        background: transparent;
        width: 60px;
        height: 60px;
        position: absolute;
        border-radius: 20%;
    }
  
    .moneda-animate::after{
        content: '';
        display: inline-block;
        background-image: url(${logoLight});
        width: 60px;
        height: 60px;
        position: absolute;
        background-size: 55px 55px;
        background-repeat: no-repeat;
    }
  
    @keyframes salto-animate {
        0%, 100% {top: 0;}
        30% {top:-3px;}
    }
    `
  
    return(
      <Box sx={{styles}}>
        <Box className="contenedor-animate">
          <Box className="moneda-animate">
          </Box>
        </Box>
      </Box>
    )
  }