export class WeatherValues {
    constructor(public value: number, public valueName: 'temperature' | 'presure' | 'windSpeed' ){
        this.value = value;
        this.valueName = valueName
    }
}