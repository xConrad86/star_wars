import React, { useEffect, useState } from 'react';
import Intro from './Intro';
import './styles.scss'
import {useNavigate} from 'react-router-dom'

const MainView = () => {
    const [introVisible, setIntroVisible] = useState(true)

    useEffect(() => {
      const timer = setTimeout(() => {
        setIntroVisible(false)
      }, 25000);
      return () => clearTimeout(timer);
      }, [introVisible]
    )

    let navigate = useNavigate();   

    const handlePlayClick = (isVisible) => {
        setIntroVisible(!isVisible)        
    }

    const openGame = (type) => {     
        navigate('/Game')     
    }     

    return <div className='main-view'>
            { introVisible ?
              <React.Fragment>                
                <Intro/> 
                <div className='main-view-btn-init'>
                  <button 
                    onClick={() => handlePlayClick(introVisible)}>
                    Let's play !
                  </button>
                </div>
              </React.Fragment> 
              :  <div className='main-view-btns'>
                  <button onClick={() => openGame('single')}>
                    Single player
                  </button>
                  <button onClick={() => alert('Not available in demo version, sorry :-)')}>
                    Multi player
                  </button>
                 </div>
            }           
          </div> 
}

export default MainView;