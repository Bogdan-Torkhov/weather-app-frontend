export interface IWeatherResponse {
   location: {
      country: string,
      name: string,
      region: string,
      localtime_epoch: number
   }
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