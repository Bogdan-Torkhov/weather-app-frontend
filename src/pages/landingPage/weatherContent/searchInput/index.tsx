import { Dispatch, FC, SyntheticEvent, useState, ChangeEvent} from 'react'

interface ISearchBlockProps {
    setCityName: Dispatch<string>
}

export const SearchBlock: FC<ISearchBlockProps> = ({ setCityName }) => {
    const [inputValue, setInputValue] = useState<string>('')
    function requestCityName (event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault()

        if(inputValue){
            setCityName(inputValue)
        }
    }

    function handleChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <form onSubmit={requestCityName} >
                <label>
                    <span>Введите название города</span>
                    <input type={'text'} value={inputValue} onChange={handleChangeInputValue} name='cityName' />
                </label>
                <button type='submit' >искать</button>
            </form>
        </div>
    )
}