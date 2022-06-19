import { Dispatch, FC, SyntheticEvent, useState, ChangeEvent } from 'react'
import { SearchBlockBody, SearchInputLabel, SearchInput, SearchForm, SearchButton } from './styled'

interface ISearchBlockProps {
    cityName: string
    setCityName: Dispatch<string>
}

export const SearchBlock: FC<ISearchBlockProps> = ({ setCityName, cityName }) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [isInputFocused, setInputFocused] = useState<boolean>(false)
    function requestCityName(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault()

        if (inputValue) {
            setCityName(inputValue)
            setInputValue('')
        }
    }

    function handleChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value)
    }

    function handleChangeInputFocus(){
        setInputFocused( prevState => {
            return !prevState
        })
    }

    return (
        <SearchForm onSubmit={requestCityName} >
            <SearchBlockBody>
                <SearchInputLabel>
                    <span>Введите название города</span>
                    <SearchInput
                        placeholder={isInputFocused ? '🔍Введите сюда название города' : cityName}
                        type={'text'}
                        value={inputValue}
                        onChange={handleChangeInputValue}
                        onFocus={handleChangeInputFocus}
                        onBlur={handleChangeInputFocus}
                        name='cityName'
                        autoComplete='off'
                    />
                </SearchInputLabel>
                <SearchButton type='submit' >искать</SearchButton>
            </SearchBlockBody>
        </SearchForm>
    )
}