const {
    REACT_APP_BACKEND_URL: backendUrl,
    REACT_APP_WEATHER_SECRET_KEY: weatherApiKey
} = process.env

function getValueByName(value: string | undefined, defaultValue='') {
    return value || defaultValue
}

export const appConfig = {
    backendUrl: getValueByName(backendUrl, 'localhost:3000'),
    weatherApiKey: getValueByName(weatherApiKey, '')
}