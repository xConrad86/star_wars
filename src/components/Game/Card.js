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

    return (
        <React.Fragment>            
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
                        {Object.keys(card).map((c) => (<Typography className={classes.game_typography_body}>{c}: {card[c]}</Typography> ))}                                                                           
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
                        className={classes.game_typography_title}
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
                            className={classes.img}      
                        ></CardMedia>
                        <CardContent>
                            <Typography className={classes.game_typography_body}
                                >Name: {card.name}</Typography>  
                            { 
                                gameObjType === 'people' ? 
                                <Typography className={classes.game_typography_body}
                                >Mass: {card.mass}</Typography>          
                                :
                                <Typography className={classes.game_typography_body}>Crew: {card.crew}</Typography>          
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
        </React.Fragment>
      )
  } 

export default ObjCard;
  
const EmptyCard = () => {
     const classes = useStyles()
     return (
       <Card          
          className={classes.emptyCardStyle}
          >
          <CardHeader
              className={classes.game_typography_title}
              title={'Unknown'}               
          />
         <CardActionArea>
           <CardMedia             
             component="img"
             image={unknown}
             title={"noname"}    
             className={classes.img}             
           ></CardMedia>
           <CardContent>
             <Typography className={classes.game_typography_body}>Name: Unknown</Typography>
             <Typography className={classes.game_typography_body}>Mass/Crew: Unknown</Typography>
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