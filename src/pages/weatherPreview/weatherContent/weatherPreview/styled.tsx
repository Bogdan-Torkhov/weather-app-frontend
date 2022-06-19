import { fluidTypography } from "components/fluidTypography";
import styled from "styled-components";

export const SingleCard = styled.div`
    &{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
`

export const SingleCardValueName = styled.h3`
    &{
        font-size: ${fluidTypography(1920, 320, 16, 24)};
    }
`

export const SingleCardValue = styled.h4`
    &{
        font-size: ${fluidTypography(1920, 320, 14, 22)};
    }
`

export const PreviewBlock = styled.div`
    &{
        display: flex;
        margin-left: 1rem;
        flex-direction: column;
    }
`