import { useEffect, useLayoutEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { appConfig } from '@config/appConfig'
import { WeatherPreviewCard } from './singleCard'
import { SearchBlock } from './searchInput'
import { PageContentBlock, WeatherPreview, WeatherPreviewCityName, WeatherPreviewContainer } from './styled'
import { IWeatherResponse } from 'types/weatherResponse'
import { IWeatherValues } from 'types/weatherResponse'


export const WeatherContent = () => {
    const [weatherValues, setWeatherValues] = useState<IWeatherValues>()
    const [cityName, setCityName] = useState<string>('Великий Новгород')

    useLayoutEffect(() => {
        updateWeatherValues(cityName)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function updateWeatherValues(cityNameToSearch: string) {

        const valuesFromBackend: AxiosResponse<IWeatherResponse, null> = await axios({
            method: 'POST',
            url: `http://api.weatherapi.com/v1/current.json`,
            params: {
                key: appConfig.weatherApiKey,
                q: cityNameToSearch
            }
        })

        if (valuesFromBackend.status === 200) {
            const values = valuesFromBackend.data.current
            setCityName(valuesFromBackend.data.location.name)
            setWeatherValues(values)

        } else if (valuesFromBackend.status > 400) {
            console.error('Неправильное имя города')
        }

    }

    return (
        <PageContentBlock>
            <WeatherPreview>

                <SearchBlock setCityName={updateWeatherValues} />

                <h1>
                    Current city weather preview
                </h1>

                <WeatherPreviewCityName>
                    {cityName}
                </WeatherPreviewCityName>

                <WeatherPreviewContainer>

                

                </WeatherPreviewContainer>

            </WeatherPreview>
        </PageContentBlock>
    )
}