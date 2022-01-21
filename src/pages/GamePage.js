import React, { useState, useEffect } from "react";
import { isEmptyObject } from "../utils/Functions";
import { TrinityRingsSpinner } from "react-epic-spinners";
import GameView from './../components/Game/GameView'
import "./styles.scss";

const GamePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});

  const handleChangeLoading = (isLoading) => {
    setIsLoading(isLoading)
  }

  const handleError = (error) => {
    setError(error)
  }

  useEffect(() => {  
    let timer;     

    timer = setTimeout(() => {
        handleChangeLoading(false)
    }, 3000);            

    return () => clearTimeout(timer);        
  }, [isLoading])            


  const getAppState = () => {
    if (isLoading) {
      return (
        <React.Fragment>
          <TrinityRingsSpinner          
            size={250}
            className="game-page-spinner"            
          />
          <h1 id="title-wait">
            Please wait... Drawing card for the players            
          </h1>
        </React.Fragment>
      );
    } else {
      return <div>{error.error}</div>;
    }
  };

  return (
    <React.Fragment>
      {isLoading || isEmptyObject(error) === false ? (
        getAppState()
      ) : (
        <GameView handleChangeLoading={handleChangeLoading} handleError={handleError} 
        />
      )}
    </React.Fragment>
  );
};

export default GamePage;
