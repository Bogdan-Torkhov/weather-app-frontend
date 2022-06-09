import {useState} from 'react'
import { PageBasicLayout, Header, HeaderTitle, PageContentBlock, WeatherPreview, WeatherPreviewCityName, WeatherPreviewContainer, WeatherPreviewItem } from './styled'

// TODO: Разбить компонент на подкомпоненты.

export const LandingPage = () => {
    const [currentCity, setCurrentCity] = useState('Paris')
    const [currentTemperature, setCurrentTemperature] = useState(0)
    const [currentPresure, setCurrentPresure] = useState(0)
    const [currentWindSpeed, setCurrentWindSpeed] = useState(0)
    const [currentUVIndex, setCurrentUVIndex] = useState(0)
    const [currentPrecipitation, setCurrentPrecipitation] = useState(0)

    return (
        <PageBasicLayout>
            <Header>
                <HeaderTitle>
                    weather app
                </HeaderTitle>
            </Header>

            <PageContentBlock>
                <WeatherPreview>
                    
                    <h1>
                        Current city weather preview
                    </h1>

                    <WeatherPreviewCityName>
                        {currentCity}
                    </WeatherPreviewCityName>

                    <WeatherPreviewContainer>

                        <WeatherPreviewItem>
                            temperature: 
                            {currentTemperature}
                        </WeatherPreviewItem>

                        <WeatherPreviewItem>
                            presure: 
                            {currentPresure}
                        </WeatherPreviewItem>

                        <WeatherPreviewItem>
                            wind speed: 
                            {currentWindSpeed}
                        </WeatherPreviewItem>

                        <WeatherPreviewItem>
                            UV-index: 
                            {currentUVIndex}
                        </WeatherPreviewItem>

                        <WeatherPreviewItem>
                            precipitation: 
                            {currentPrecipitation}
                        </WeatherPreviewItem>

                    </WeatherPreviewContainer>

                </WeatherPreview>
            </PageContentBlock>

        </PageBasicLayout>
    )
}