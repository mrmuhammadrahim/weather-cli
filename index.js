import { getArgv } from "./helpers/args.js";
import { printError, printSucces, printHelp } from "./servises/log-servises.js";
import { saveApiKey } from "./servises/storage-servises.js";
import { getWeatherData } from "./servises/api-servis.js";
import { saveCity } from "./servises/save-city.js";


const saveToken = async token =>{

    if(!token){
        printError("Token doesn't exist")
        return
    }

    try {
        await saveApiKey("token", token)

    } catch (error) {
        printError(error.message)
    }
}


function startCLI( ) {

    const args = getArgv(process.argv)


    if( args.s ){

        saveCity(args.s)
        return
    }
    else if( args.h ){

        printHelp()
        return
    }
    else if( args.t ){
        return saveToken(args.t)
    }
    else{

        
    }

    getWeatherData()
}

startCLI()