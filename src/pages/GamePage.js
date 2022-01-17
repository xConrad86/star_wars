import React, { useEffect, useState } from 'react'
import {   
    Typography,
    Container,  
    Button,
    Grid,
    Box,    
  } from '@material-ui/core';
import { isEmptyObject } from '../utils/Functions';
import { TrinityRingsSpinner } from 'react-epic-spinners'
import { getCard } from '../api/ApiFunction';
import { useStyles } from '../components/styles/styles';
import ObjCard from './../components/Game/Card'

const getFontSize = () => {
    if(window.innerWidth > 1368){
       return  '2.5rem'
    } else if (window.innerWidth > 80){
        return  '1.5rem'
    } else {
        return  '0.95rem'
    }

}

const GamePage = (props) => {
    const [isLoading, setIsLoading] = useState(true)    
    const [gameType, setGameType] = useState('single')
    const [gameObjType, setGameObjType] = useState('people')
    const [firstCard, setFirstCard] = useState({})
    const [secondCard, setSecondCard] = useState({})
    const [error, setError] = useState({}) 
    const [playerOneWins, setPlayerOneWins] = useState(0)
    const [playerTwoWins, setPlayerTwoWins] = useState(0)    
    const classes = useStyles()
    
    const handleChangeGameType = (gameType) => {      
        return alert('Not available in demo version, sorry :-)')        
        //demo versio without extra features
    //    let newGameType = 'single'
    //    if(gameType === 'single'){
    //        newGameType = 'multi'
    //    }
    //    setGameType(newGameType)
    }

    const handleChangeGameObjType = (gameObjType) => {           
        let newGameObjType = 'people'
        if(gameObjType === 'people'){
            newGameObjType = 'starships'
        }
        setGameObjType(newGameObjType)
        clearCards()
    }

    const handleIsLoading = (isLoading) =>{
        setIsLoading(isLoading)
    }

    const handleError = (error) => {
        setError(error)
    }

    const handleCard = (type, card) => {  
        
        if(type==='first'){
            setFirstCard(card);            
        } else if (type==='second') {
            setSecondCard(card);
        }        
    }

    useEffect(() => {  
        let timer; 
        let insideTimer;          
        const getCards = (cardType) => {
             getCard(props = {gameObjType, handleIsLoading, handleError, handleCard, cardType})            
        }

        timer = setTimeout(() => {
            if(isEmptyObject(firstCard)){
                getCards('first');
                insideTimer = setTimeout(() => {
                    if(isEmptyObject(secondCard)){
                        getCards('second');                                       
                    }
                }, 3000);
            }
        }, 3000);        
       
        if(isEmptyObject(firstCard) === false && isEmptyObject(secondCard) === false){    
            if(gameObjType==='people'){                
                getWinner(firstCard.mass.replace(',',''), secondCard.mass.replace(',',''))                                
            } else {
                getWinner(formatCrew(firstCard.crew), formatCrew(secondCard.crew))                                
            }                                   
        }

        return () => clearTimeout(timer, insideTimer);        
    }, [firstCard, secondCard, isLoading])            

    const clearCards = () => {
        setFirstCard({})
        setSecondCard({})
    }

    const formatCrew = (crew) => {
        if(crew.includes('-')){
           return crew.split('-')[0]
        } else if (crew.includes(',')) {
            return crew.replace(',','')
        } else {
            return crew
        }
    }

    const getWinner = (cardOneMass, cardTwoMass) => {
        let winner = '';
        //handle no numbers
        if(isNaN(cardOneMass) && isNaN(cardTwoMass)){
            winner = "We have equal numbers in this round"
        } else if (isNaN(cardOneMass)){
            setPlayerTwoWins(playerTwoWins + 1)
            winner = "CPU won this round(NAN). Result " + cardTwoMass
        } else if (isNaN(cardTwoMass)){
            setPlayerOneWins(playerOneWins + 1)
            winner = "Player One won this round(NAN). Result " + cardOneMass
        } 

        //handle numbers
        let noCardOneMass = Number(cardOneMass);
        let noCardTwoMass = Number(cardTwoMass);
        
        if (noCardOneMass === noCardTwoMass){
            winner = "We have equal numbers in this round."            
        } else if (noCardOneMass > noCardTwoMass){
            setPlayerOneWins(playerOneWins + 1) 
            winner = "Player One won this round. Result " + cardOneMass
        } else if (noCardOneMass < noCardTwoMass){
            setPlayerTwoWins(playerTwoWins + 1)
            winner = "CPU won this round. Result " + cardTwoMass
        }        
        alert(winner)
    }

    const getAppState = () => {        
        if(isLoading){            
            return  <React.Fragment>
                        <TrinityRingsSpinner 
                            size={250}
                            style={{
                            position: 'absolute',                
                            left: '45%',
                            top: '40%',                
                            color:'white'}}
                        />                               
                        <h1 
                            id='title-wait'
                            style={{textAlign:'center', fontSize: getFontSize()}}>
                            Please wait... Drawing card for the { isEmptyObject(firstCard) ? 'players' : 'computer'}
                        </h1>
                    </React.Fragment>
        } else {
            return <div>
                    {error.error}
            </div>
        }
    }    
    return (        
      <React.Fragment>
       {isLoading || isEmptyObject(error) === false ?        
           getAppState()
        :           
        <Container>              
             <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ height: '30vh'}}                
                >
              <Box 
                spacing={0}
                direction="row"
                alignItems="center"
                justifyContent="center"     
                display='flex'     
                style={{gap:'2vw'}}
              >
                <Typography
                    style={{fontSize: getFontSize()}}                    
                    > 
                    Mode: {gameType}
                </Typography> 
                <Button
                   className={classes.buttonMode}                    
                   onClick={() => handleChangeGameType}
                >
                    Change
                </Button>                
              </Box> 
              <Box 
                spacing={0}
                direction="row"
                alignItems="center"
                justifyContent="center"     
                display='flex'   
                style={{gap:'2vw'}}                       
              >
                <Typography
                    style={{fontSize: getFontSize()}}                    
                    > 
                    Card type: {gameObjType}
                </Typography> 
                <Button className={classes.buttonMode}
                    disabled={isEmptyObject(secondCard)}
                    onClick={() => handleChangeGameObjType(gameObjType)}>
                    Change
                </Button>                
              </Box> 
            
              <Typography
                style={{fontSize: getFontSize()}}                                 
                > 
                  Player one wins: {playerOneWins}
              </Typography>                 
              <Typography
                style={{fontSize: getFontSize()}}                    
                > 
                 {gameType === 'single' ? 
                    'CPU wins: ' + playerTwoWins : 'Player two wins: ' + playerTwoWins
                 } 
              </Typography>                   
            </Grid>  
            <Grid container
                spacing={0}
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{ height: '10vh'}}                
                >               
                <Button
                   id='play-again' 
                   disabled={isEmptyObject(secondCard)}
                   className={classes.buttonMode}
                   onClick={() => clearCards()}
                   >                                    
                    Play again
                </Button>      
            </Grid>           
            <Grid container
                spacing={0}
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{ height: '60vh', gap:'2vw'}}                
                >                                               
                <ObjCard type={'first'} card={firstCard} gameType={gameType} gameObjType={gameObjType}/>                          
                <ObjCard type={'second'} card={secondCard} gameType={gameType} gameObjType={gameObjType}/>                          
            </Grid>
        </Container>          
        }        
      </React.Fragment>                 
    )
}

export default GamePage;