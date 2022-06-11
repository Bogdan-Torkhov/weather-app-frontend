import styled from "styled-components"
import { fluidTypography } from "components/fluidTypography"

export const PageContentBlock = styled.section`
    &{
        display: flex;
        align-self: center;
        margin-top: .5rem;
        width: 70%;
        justify-content: center;
        border: 1px solid #cecece;
        padding: 1rem 2rem;
    }
`

export const WeatherPreview = styled.div`
    &{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`

export const WeatherPreviewCityName = styled.h2`
    &{
        user-select: none;
        font-size: ${fluidTypography(320, 1920, 18, 36)}
    }
`

export const WeatherPreviewContainer = styled.div`
        &{
            display: flex;
            width: 100%;
            overflow-x: scroll;
            border: 1px solid #989898;
            border-radius: 8px ;
            padding: 1rem;
            gap: 1rem;
        }
`



export const WeatherPreviewItem = styled.div`
    &{
        display: flex;
        padding: 1rem;
    }
`