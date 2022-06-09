import {Routes, Route} from 'react-router-dom'
import { App } from 'pages/App'

export const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<App />} />
        </Routes>
    )
}