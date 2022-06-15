export interface IWeatherResponse {
   current: {
    cloud: number,
    feelslike_c: number,
    feelslike_f: number,
    gust_kph: number,
    humidity: number,
    temp_c: number,
    wind_kph: number
   }
}