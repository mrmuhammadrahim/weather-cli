import axios from "axios";
import { getApiKey } from "./storage-servises.js";
import { printError } from "./log-servises.js";
import { saveCity } from "./save-city.js";
import { showData } from "./show-data.js";


export async function getWeatherData() {
    
    const cityInfo = await saveCity()
    const city = cityInfo["city"]
    if(!city){
        printError("City has not been saved")
        return
    }

    const token = await getApiKey()

    if(!token){
        printError("Token not found")
        return
    }
    
    try{
        const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: city,
                appid: token,
                lang: "en",
                units: "metric"
            }
        })

        showData(data)

    }
    catch(error){

        printError(error.response.data.message)

    }



}