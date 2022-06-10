import styled from "styled-components"

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
        font-size: 36px;
    }
`

export const WeatherPreviewContainer = styled.div`
        &{
            display: flex;
            width: 100%;
            justify-content: space-around;
        }
`



export const WeatherPreviewItem = styled.div`
    &{
        display: flex;
        padding: 1rem;
    }
`