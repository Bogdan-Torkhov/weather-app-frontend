import { Routes, Route } from 'react-router-dom'
import { LandingPage } from 'pages/weatherPreview'

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
        </Routes>
    )
}