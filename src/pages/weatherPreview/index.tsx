import { Header } from './header/index'
import { PageBasicLayout } from './styled'
import { WeatherContent } from './weatherContent'

export const LandingPage = () => {

    return (
        <PageBasicLayout>
            <Header />
            <WeatherContent />
        </PageBasicLayout>
    )
}