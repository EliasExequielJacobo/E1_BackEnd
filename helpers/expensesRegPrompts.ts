import inquirer from "inquirer"
import { InterfaceRegisterExpenses } from "../interfaces/interfaces"

export const newExpenseRegisterPrompt = async(): Promise< InterfaceRegisterExpenses > => {

    return await inquirer.prompt([

        {
            type: "number",
            name: "expense",
            message: "Ingrese cantidad gastada:"

        },
        {
            
            type: "input",
            name: "currency",
            message: "Ingrese divisa/moneda usada:"

        },
        {
            type: "input",
            name: "date",
            message: "Ingrese fecha del gasto (ej: 09/09/1999):"

        },
        {
            type: "input",
            name: "description",
            message: "Ingrese descripcion del gasto:"

        }

    ])



}