import { IWeatherValues } from 'types/weatherResponse'
import { PreviewBlock, SingleCard, SingleCardValueName, SingleCardValue } from './styled'
import { FC } from 'react'

interface IWeatherPreview {
    values: IWeatherValues
}

export const WeatherPreview: FC<IWeatherPreview> = ({ values }) => {
    return (
        <PreviewBlock>
            <SingleCard>
                <SingleCardValueName>Облачность: </SingleCardValueName>
                <SingleCardValue>{values.cloud} </SingleCardValue>
            </SingleCard>

            <SingleCard>
                <SingleCardValueName>Температура: </SingleCardValueName>
                <SingleCardValue>{values.temp_c} </SingleCardValue>
            </SingleCard>

            <SingleCard>
                <SingleCardValueName>Ощущается как: </SingleCardValueName>
                <SingleCardValue>{values.feelslike_c}</SingleCardValue>
            </SingleCard>

            <SingleCard>
                <SingleCardValueName>Влажность: </SingleCardValueName>
                <SingleCardValue>{values.humidity}% </SingleCardValue>  
            </SingleCard>

            <SingleCard>
                <SingleCardValueName>{values.is_day ? 'День' : 'Ночь'} </SingleCardValueName>
            </SingleCard>
        </PreviewBlock>
    )
}