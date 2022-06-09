import styled from 'styled-components'

export const PageBasicLayout = styled.div`
    &{
        display: flex;
        height: 100vh;
        width: 100vw;
        flex-direction: column;
    }
`

export const Header = styled.header`
    &{
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 1rem;
        background-color: #e9e9e9;
        box-shadow: .5rem 0px 10px 10px #49494950;
    }
`

export const HeaderTitle = styled.h1`
    &{
        color: #686868;
        user-select: none;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 48px;
    }
`

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