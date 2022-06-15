import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { appConfig } from '@config/appConfig'
import { WeatherPreviewCard } from './singleCard'
import { SearchBlock } from './searchInput'
import { PageContentBlock, WeatherPreview, WeatherPreviewCityName, WeatherPreviewContainer } from './styled'
import { IWeatherResponse } from 'types/weatherResponse'
import { IWeatherValues } from 'types/weatherValues'

export const WeatherContent = () => {
    const [weatherValues, setWeatherValues] = useState<IWeatherValues>()
    const [cityName, setCityName] = useState<string>('Великий Новгород') 

    useEffect(() => {
        updateWeatherValues(cityName)
    }, [cityName])

    async function updateWeatherValues(cityNameToSearch: string) {

        const valuesFromBackend: AxiosResponse<IWeatherResponse, null> = await axios({
            method: 'POST',
            url: `http://api.weatherapi.com/v1/current.json`,
            params: {
                key: appConfig.weatherApiKey,
                q: cityNameToSearch
            }
        })

        console.log(valuesFromBackend.data)

        if (valuesFromBackend.status === 200) {
            setWeatherValues(valuesFromBackend.data.current)
        } else if (valuesFromBackend.status > 400) {
            console.error('Неправильное имя города')
        }

    }

    return (
        <PageContentBlock>
            <WeatherPreview>

                <SearchBlock setCityName={setCityName} />

                <h1>
                    Current city weather preview
                </h1>

                <WeatherPreviewCityName>
                    {cityName}
                </WeatherPreviewCityName>

                <WeatherPreviewContainer>

                    {weatherValues && <WeatherPreviewCard value={weatherValues.temp_c} valueName='Температура' />}

                </WeatherPreviewContainer>

            </WeatherPreview>
        </PageContentBlock>
    )
}