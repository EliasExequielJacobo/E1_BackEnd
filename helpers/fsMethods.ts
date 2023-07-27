import fs from "fs";
import { InterfaceRegisterExpenses } from "../interfaces/interfaces";

export const getWithFS = ( file: string ): Promise< InterfaceRegisterExpenses[] > =>{

    return new Promise((resolve, reject) =>{

        fs.readFile( `./${file}.json`, "utf8", (err, content) => {
            if(err){
                reject(err);
            }

            resolve(JSON.parse(content))
        })

    })

}

export const saveWithFS = ( file: string, content: InterfaceRegisterExpenses[] ): Promise< void > =>{

    return new Promise((resolve, reject) => {

        fs.writeFile(file + ".json", JSON.stringify(content), (err) =>{
            if(err){
                reject(err)
            }
            resolve(console.log("Nuevo gasto añadido al registro con exito"))
        })
        
    })

} 