import {    
    makeStyles,     
  } from '@material-ui/core';

export const useStyles = makeStyles({   
    button: {
      backgroundColor: '#009fe3',
      color: '#fff',      
      '&:hover': {
        backgroundColor: '#fff',
        color: '#009fe3',
    }},
    buttonMode: {
        backgroundColor: '#009fe3',
        color: '#fff',    
        maxWidth: '10vw',
        '&:hover': {
          backgroundColor: '#fff',
          color: '#009fe3',
      }
    },
    cardStyle: {
        maxHeight: '33rem',
        width: '20rem',
        color: 'inherit'
    }, 
    emptyCardStyle: {
        maxHeight: '33rem',
        width: '20rem',
        backgroundColor: 'black',
        color: '#FFF'
    },
    desc: {
        fontSize: '5rem',
        color: '#009fe3'
    }
  })
