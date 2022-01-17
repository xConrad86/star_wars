import React, { useEffect, useState } from 'react'
import {
    Card,
    CardActionArea,
    CardMedia, 
    CardContent,
    Typography,    
    CardActions,
    Button,        
    CardHeader,    
  } from '@material-ui/core';
import darthVader from './../../images/darth_vader.png'
import yoda from './../../images/yoda.jpg'
import unknown from './../../images/question_mark.png'
import { isEmptyObject } from '../../utils/Functions';
import { useStyles } from '../styles/styles';

const ObjCard = ({type, card, gameType, gameObjType}) => {
    const [isReverseSide, setReverseSide] = useState(false) 
    const classes = useStyles()
    
    useEffect(() => {        
    }, [card, isReverseSide])

    return (
        <div key={type}>
            {isEmptyObject(card) === false ? (    
                isReverseSide ? 
                <Card className={classes.CardStyle}>
                     <CardHeader
                        title=
                        {type === 'first' ? 'Player One' : 
                            ( gameType === 'single' ? 'CPU' : 'Player Two')
                        }
                    />
                    <CardContent>
                        {Object.keys(card).map((c) => (<Typography style={{fontSize:'0.95rem'}}>{c}: {card[c]}</Typography> ))}                                                                           
                    </CardContent>
                    <CardActions>       
                        <Button
                        size="small"
                        className={classes.button}                
                        onClick={() => setReverseSide(!isReverseSide)}
                        >
                        Show details
                        </Button>
                    </CardActions>
                </Card>
                :
                <Card           
                    className={classes.CardStyle}>
                    <CardHeader
                        title=
                        {type === 'first' ? 'Player One' : 
                            ( gameType === 'single' ? 'CPU' : 'Player Two')
                        }
                    />
                    <CardActionArea>
                        <CardMedia                        
                            component="img"
                            image={ type === 'second' ? darthVader : yoda}
                            title={card.name}          
                        ></CardMedia>
                        <CardContent>
                            <Typography>Name: {card.name}</Typography>  
                            { 
                                gameObjType === 'people' ? 
                                <Typography>Mass: {card.mass}</Typography>          
                                :
                                <Typography>Crew: {card.crew}</Typography>          
                            }          
                            
                        </CardContent>
                    </CardActionArea>
        
                    <CardActions>       
                        <Button
                        size="small"
                        className={classes.button}                
                        onClick={() => setReverseSide(!isReverseSide)}
                        >
                        Show details
                        </Button>
                    </CardActions>
                </Card>)
                : <EmptyCard/>
            }
        </div>
      )
  } 

export default ObjCard;
  
const EmptyCard = () => {
     const classes = useStyles()
     return (
       <Card
          key={'emptyCard'}
          className={classes.emptyCardStyle}
          >
          <CardHeader
              title={'Unknown'}               
          />
         <CardActionArea>
           <CardMedia
             component="img"
             image={unknown}
             title={"noname"}           
           ></CardMedia>
           <CardContent>
             <Typography>Name: Unknown</Typography>
             <Typography>Mass/Crew: Unknown</Typography>
           </CardContent>
         </CardActionArea>
  
         <CardActions>         
           <Button
                  size="small"
                  className={classes.button}                
                  onClick={() => alert('Nothing to show. Object is unknown. Draw a character.')}
                  >
             Show details
           </Button>
         </CardActions>
       </Card>
     );
  }