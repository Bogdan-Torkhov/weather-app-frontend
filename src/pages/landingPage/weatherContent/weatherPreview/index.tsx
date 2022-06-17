import { IWeatherValues } from 'types/weatherResponse'
import {FC} from 'react'

interface IWeatherPreview { 
    values: IWeatherValues
}

export const WeatherPreview: FC<IWeatherPreview> = ({values}) => {
    return(
        <>
            <div>
                Облачность
                {values.cloud}
            </div>

            <div>
                Температура
                {values.temp_c}
            </div>

            <div>
                Ощущается как
                {values.feelslike_c}
            </div>

            <div>
                Влажность
                {values.humidity}%
            </div>

            <div>
                {values.is_day ? 'День' : 'Ночь'}
            </div>
        </>
    )
}