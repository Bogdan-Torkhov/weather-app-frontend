import { useLayoutEffect, useState } from 'react'
import axios from 'axios'
import { appConfig } from '@config/appConfig'
import { WeatherPreviewCard } from './singleCard'
import { PageContentBlock, WeatherPreview, WeatherPreviewCityName, WeatherPreviewContainer } from './styled'
import { WeatherValues } from 'types/ISingleValue'

export const WeatherContent = () => {
    const [weatherValues, setWeatherValues] = useState<Array<WeatherValues>>([])
    const [cityName, setCityName] = useState<string>('Moscow')
    useLayoutEffect(()=>{
        console.log('Config from .env is: ', appConfig.backendUrl)
        updateWeatherValues()
    },[])

    async function updateWeatherValues() {


        const valuesFromBackend = await axios({
            method: 'GET',
            url: `${appConfig.backendUrl}/api`
        })
        console.log(valuesFromBackend)

        const fakeResponseFromBackend: Array<WeatherValues> = [
            {
                valueName: 'temperature',
                value: 24,
            },
            {
                valueName: 'presure',
                value: 149,
            },
            {
                valueName: 'windSpeed',
                value: 14
            }
        ]

        if (fakeResponseFromBackend &&
            fakeResponseFromBackend instanceof Array
        ) {
            setWeatherValues(fakeResponseFromBackend)
        }

    }

    return (
        <PageContentBlock>
            <WeatherPreview>

                <h1>
                    Current city weather preview
                </h1>

                <WeatherPreviewCityName>
                    {cityName}
                </WeatherPreviewCityName>

                <WeatherPreviewContainer>

                    {weatherValues.map((item, index) => {
                        return (
                            <WeatherPreviewCard value={item.value} valueName={item.valueName} />
                        )
                    })}

                </WeatherPreviewContainer>

            </WeatherPreview>
        </PageContentBlock>
    )
}