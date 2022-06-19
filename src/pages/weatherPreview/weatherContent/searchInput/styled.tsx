import styled from 'styled-components'

export const SearchForm = styled.form`
    &{
        border: 1px solid #dddddd;
        padding: .5rem 1rem;
    }
`

export const SearchBlockBody = styled.div`
    &{
        display: flex;
        gap: .5rem; 
        flex-direction: column;
    }
`

export const SearchInputLabel = styled.label`
    &{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`

export const SearchInput = styled.input`
    &{
        padding: 4px 6px;
        transition: .5s;
    }
    &:focus{
        min-width: 300px;
    }
`

export const SearchButton = styled.button`
    &{
        flex-basis: content;
        flex: 0 0 content;
        text-transform: uppercase;
    }
`