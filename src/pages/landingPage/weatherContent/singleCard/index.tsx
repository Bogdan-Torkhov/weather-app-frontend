import {WeatherPreviewItem} from './styled'
import {FC} from 'react'
import { WeatherValues } from 'types/ISingleValue'

export const WeatherPreviewCard: FC<WeatherValues> = ({valueName, value}) => {
    return (
        <WeatherPreviewItem>
            <span>{valueName}</span>
            <span>{value}</span>
        </WeatherPreviewItem>
    )
}