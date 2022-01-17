const peoplePages = 9;
const starshipsPages = 4; 

export const getRandomRecord = (arrLength) => {    
    let firstRecord = 0;
    
    return Math.floor(Math.random() * (arrLength - firstRecord) + firstRecord);
}

export const getRandomPage = (type) => {
    let randomPage = 0;

    if(type==='people'){
        randomPage = Math.floor(Math.random() * (peoplePages - 1) + 1);
    } else if (type==='starships') {
        randomPage = Math.floor(Math.random() * (starshipsPages - 1) + 1);
    }    

    return randomPage
}

export const isEmptyObject = (obj) => {
    return JSON.stringify(obj) === '{}';
}