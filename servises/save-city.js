import os from "os"
import path from "path"
import { printSucces } from "./log-servises.js"
import fs from "fs/promises"

const filePath = path.join(os.homedir(), "weather-city.json")
export const  saveCity = async city => {


    if(!city){
        const data = await fs.readFile(filePath, "utf-8")
        const cityInfo = JSON.parse(data)
        return cityInfo
    }

    const data = {
        city
    }

    await fs.writeFile(filePath, JSON.stringify(data))
    printSucces("City saved succes")

}

