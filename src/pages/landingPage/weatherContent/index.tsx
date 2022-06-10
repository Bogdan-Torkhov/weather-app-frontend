import { useLayoutEffect, useState } from 'react'
import { WeatherPreviewCard } from './singleCard'
import { PageContentBlock, WeatherPreview, WeatherPreviewCityName, WeatherPreviewContainer } from './styled'
import { WeatherValues } from 'types/ISingleValue'

export const WeatherContent = () => {
    const [weatherValues, setWeatherValues] = useState<Array<WeatherValues>>([])

    useLayoutEffect(()=>{
        updateWeatherValues()
    },[])

    function updateWeatherValues() {

        //make some request

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