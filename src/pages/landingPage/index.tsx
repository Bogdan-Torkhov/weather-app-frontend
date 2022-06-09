import {useState} from 'react'
import { PageBasicLayout, Header, HeaderTitle, PageContentBlock, WeatherPreview, WeatherPreviewCityName, WeatherPreviewContainer, WeatherPreviewItem } from './styled'

// TODO: Разбить компонент на подкомпоненты.

export const LandingPage = () => {
    const [currentCity, setCurrentCity] = useState<string>('Paris')
    const [currentTemperature, setCurrentTemperature] = useState<number>(0)
    const [currentPresure, setCurrentPresure] = useState<number>(0)
    const [currentWindSpeed, setCurrentWindSpeed] = useState<number>(0)
    const [currentUVIndex, setCurrentUVIndex] = useState<number>(0)
    const [currentPrecipitation, setCurrentPrecipitation] = useState<number>(0)

    function changeCurrentCity(city: string){
        setCurrentCity(city)
    }

    function updateWeatherValues(){
        //make some request
        const fakeResponseFromBackend = {
            temperature: 5,
            presure: 5,
            windSpeed: 5,
            UVIndex: 5,
            precipitation: 5
        }
        setCurrentTemperature(fakeResponseFromBackend.temperature);
        setCurrentPresure(fakeResponseFromBackend.presure);
        setCurrentWindSpeed(fakeResponseFromBackend.windSpeed);
        setCurrentUVIndex(fakeResponseFromBackend.UVIndex);
        setCurrentPrecipitation(fakeResponseFromBackend.precipitation);
    }

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

                    <button onClick={updateWeatherValues}>update weather</button>

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