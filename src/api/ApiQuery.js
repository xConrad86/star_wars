
export const getApiQuery = (query, page) => {
  switch(query.toLowerCase()){
        case 'starships': 
            return 'starships/?page=' + page          
        case 'people':
            return 'people/?page=' + page                     
  }    
} 