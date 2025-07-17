import chalk from "chalk"
import dedent from "dedent"


export const printSucces = message =>{
    console.log( chalk.bgGreen("SUCCES") + ` ${message}`)
}

export const printError = error =>{
    console.log( chalk.bgRed("ERROR") + ` ${error}`)
}

export const printHelp = () =>{
    console.log(dedent`
        ${chalk.bgCyan('HELP')}
        -s [CITY] for install city
        -t [API_KEY] for saving token
        -h for help
    `)
}