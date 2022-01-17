import { getUrl } from "./ApiUrl";
import { getApiQuery } from './ApiQuery'
import axios from 'axios'
import { getRandomPage, getRandomRecord } from "../utils/Functions";

export const getCard = async ({ gameObjType, handleIsLoading, handleError, handleCard, cardType}) => {    
    let card = {};
    let cards = [];
    let response_Arr;
    let page = getRandomPage(gameObjType)    
    const apiUrl = getUrl() + getApiQuery(gameObjType, page)
    
    try{        
        response_Arr = await axios(apiUrl)        
        if(response_Arr.request.status === 200){
            cards = response_Arr.data.results            
            if(cards.length > 0){
                card = cards[getRandomRecord(cards.length)]                
                handleCard(cardType, card)
            } else {
                handleError({ error: 'Error! cannot find cards. Please contact adminstrator.'})        
            }
        }                
    }
    catch(error){
        handleError(error)        
    } 
    finally{
        handleIsLoading(false)
    }
}

