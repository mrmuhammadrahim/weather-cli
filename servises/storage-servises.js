import os from "os"
import path from "path"
import fs from "fs"
import { printError, printSucces } from "./log-servises.js"



const filePath = path.join( os.homedir(), "weather.json" )

const isTrueToken = token =>{
    if(token.length == 32){
        if(/[a-zA-Z]/.test(token)){
            if(/[0-9]/.test(token)){
                return false
            }
        }
    }

    return true
}

export const saveApiKey = async (key, value) =>{
    
    const isWrongValue = isTrueToken(value)
    if(isWrongValue){
        printError("Invalid token")
        return
    }

    let data = {}

    if( await isExist(filePath) ){
        const file = await fs.promises.readFile(filePath, "utf-8")
        data = JSON.parse(file)
    }

    data[key] = value

    printSucces("Token was saved succes")

    await fs.promises.writeFile(filePath, JSON.stringify(data))


}

export const getApiKey = async () =>{
    if(isExist(filePath)){
        const file = await fs.promises.readFile(filePath, "utf-8")
        const data = JSON.parse(file)

        return data["token"]
    }

    return undefined
}



const isExist = async path => {
    try {
        await fs.promises.stat(path)

        return true
    } catch (error) {

        return false
    }
}