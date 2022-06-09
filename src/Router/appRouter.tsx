import {Routes, Route} from 'react-router-dom'
import { LandingPage } from 'pages/landingPage'

export const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<LandingPage/>} />
        </Routes>
    )
}