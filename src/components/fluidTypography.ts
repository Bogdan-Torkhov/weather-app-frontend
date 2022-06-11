export function fluidTypography(Vmin: number, Vmax: number, Fmin: number, Fmax: number) {
    return `calc( ( 100vw - ${Vmin}px )/(${Vmax} - ${Vmin} ) * ( ${Fmax} - ${Fmin}) + ${Fmin}px )`
}