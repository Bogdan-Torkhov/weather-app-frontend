import { useLayoutEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { appConfig } from '@config/appConfig'
import { SearchBlock } from './searchInput'
import { PageContentBlock, WeatherPreviewCityName, WeatherPreviewBlock } from './styled'
import { IWeatherResponse } from 'types/weatherResponse'
import { IWeatherValues } from 'types/weatherResponse'
import { WeatherPreview } from './weatherPreview'


export const WeatherContent = () => {
    const [weatherValues, setWeatherValues] = useState<IWeatherValues>()
    const [cityName, setCityName] = useState<string>('Великий Новгород')

    useLayoutEffect(() => {
        updateWeatherValues(cityName)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function updateWeatherValues(cityNameToSearch: string) {

        const valuesFromBackend: AxiosResponse<IWeatherResponse, null> = await axios({
            method: 'GET',
            url: `${appConfig.backendUrl}/api/get_weather`,
            params: {
                city: cityNameToSearch
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
            <WeatherPreviewBlock>

                <SearchBlock cityName={cityName} setCityName={updateWeatherValues} />

                <WeatherPreviewCityName>
                    {cityName}
                </WeatherPreviewCityName>

                { weatherValues && <WeatherPreview values={weatherValues} /> }

            </WeatherPreviewBlock>
        </PageContentBlock>
    )
}