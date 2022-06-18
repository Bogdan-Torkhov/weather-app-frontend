import styled from "styled-components";
import { fluidTypography } from "components/fluidTypography";

export const HeaderContainer = styled.header`
    &{
        box-sizing: border-box;
        width: 100%;
        padding: 1rem;
        background-color: #e9e9e9;
        box-shadow: .5rem 0px 10px 10px #49494950;
    }
`

export const HeaderTitle = styled.h1`
    &{
        width: fit-content;
        color: #686868;
        user-select: none;
        font-weight: 600;
        text-transform: uppercase;
        font-size: ${fluidTypography(1920, 320, 48, 16)};
    }
`