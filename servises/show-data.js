import { printError } from "./log-servises.js"
import dedent from "dedent"
import chalk from "chalk"

const weatherIcons = iconCode =>{
    const icons = {
        "01d": "☀️",  
        "01n": "🌙",    
        "02d": "⛅",   
        "03d": "☁️",    
        "09d": "🌧️",   
        "10d": "🌦️",   
        "11d": "⛈️",   
        "13d": "❄️",   
        "50d": "🌫️"    
    }

    return icons[iconCode]
}

export const showData = data =>{
    if(!data){
        printError("404 data not found")
        return
    }

    const temp = data.main.temp
    const weather = data.weather[0].description
    const name = data.name
    const iconCode = data.weather[0].icon
    const icon = weatherIcons(iconCode)
    const humidity = data.main.humidity
    const windSpeed = data.wind.speed
    
    console.log(dedent`\n
        ${chalk.bgBlue("Weather informations")}
        Name -- ${name}
        weather -- ${weather} ${icon}
        temperatura -- ${temp}
        humidity -- ${humidity}
        wind speed -- ${windSpeed}
    `)
}