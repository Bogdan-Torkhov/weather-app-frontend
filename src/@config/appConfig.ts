const {
    REACT_APP_BACKEND_URL: backendUrl
} = process.env

function getValueByName(value: string | undefined, defaultValue='') {
    return value || defaultValue
}

export const appConfig = {
    backendUrl: getValueByName(backendUrl, 'localhost:3000')
}