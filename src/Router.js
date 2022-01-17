import React from "react"
import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import GamePage from "./pages/GamePage"
import CardsPage from "./pages/CardsPage"

const Router = () => {
    return (
        <React.Fragment> 
            <Routes>
                <Route path ='/' element={<MainPage/>}></Route>                
                <Route path ='/Game' element={<GamePage/>}></Route>              
                <Route path ='/Cards' element={<CardsPage/>}></Route>              
            </Routes>
        </React.Fragment>
    )
}

export default Router;