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
        '@media (max-width: 800px)' : {
          width: 'auto',          
          maxWidth: '20vw',        
        },      
        '&:hover': {
          backgroundColor: '#fff',
          color: '#009fe3',
      }
    },
    cardStyle: {
        maxHeight: '33rem',
        width: '20rem',
        color: 'inherit',  
    }, 
    emptyCardStyle: {
        maxHeight: '33rem',
        width: '20rem',
        backgroundColor: 'black',
        color: '#FFF',
    },
    desc: {
        fontSize: '5rem',
        color: '#009fe3'
    },
    game_typography: {
      fontSize: '2.25rem',
      '@media (max-width: 1368px)' : {
        fontSize: '1.5rem'
      }, 
      '@media (max-width: 800px)' : {
        fontSize: '0.95rem'
      },       
    },
    game_box: {      
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",     
      display: 'flex',
      gap:'2vw'
    },
    main_grid: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",    
      height: '30vh'           
    },
    game_grid: {      
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: '60vh', 
      gap:'2vw',
      '@media (max-width: 800px)' : {
        flexWrap: 'nowrap !important'
      },                       
    },
    img: {
      width: '100%',           
    },
    game_typography_title: {
      fontSize: '1.5rem',
      '@media (max-width: 1368px)' : {
        fontSize: '1.25rem'
      }, 
      '@media (max-width: 800px)' : {
        fontSize: '0.9rem'
      },       
    },
    game_typography_body: {
      fontSize: '1rem',
      '@media (max-width: 1368px)' : {
        fontSize: '0.8rem'
      }, 
      '@media (max-width: 800px)' : {
        fontSize: '0.6rem'
      },       
    },

  })
