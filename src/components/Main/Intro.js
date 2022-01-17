import React from "react";
import Crawl from 'react-star-wars-crawl'
import 'react-star-wars-crawl/lib/index.css'


const containerStyles = {      
    height: '80vh',        
    background: 'transparent'
}

const Intro = () => {
    return <Crawl containerStyles={containerStyles}                
            title="Episode I"
            subTitle="A New Developer"
            text="It's happend in old, forgotten galaxy. Developers were fighting with each other
            for new opened position in one of the best software houses in galactic. The battle was really
            interesting, a lot of skilled people with good ideas. The decision was really hard for recruiters.
            They asked themselfs, why we should take him? Does he is talented? He is producing good quality of code?
            There was a plenty of questions. Answer was not easy. But you enter this project, and definetly check, 
            is he deserve or not to enter you spaceship. Time wasn't his ally, but he did a lot of work, which hopefully 
            will be appreciated :)"
        />                  
}

export default Intro;