import {WeatherPreviewItem} from './styled'
import {FC} from 'react'

interface ICardProps {
    valueName: string,
    value: number
}

export const WeatherPreviewCard: FC<ICardProps> = ({value, valueName}) => {
    return (
        <WeatherPreviewItem>
            <span>{valueName}</span>
            <span>{value}</span>
        </WeatherPreviewItem>
    )
}