import inquirer from "inquirer";
import { getAllExpenses, logNewExpenses } from "./helpers/expensesOptions";



const main = async () => {

    let run = true;

    while (run) {

        const action = await inquirer.prompt([
            {
                type: "list",
                name: "chosenItem",
                message: "Seleccione una accion",
                choices: [
                    {
                        value: 1,
                        name: "Ver todo el registro de gastos"
                    },
                    {
                        value: 2,
                        name: "Ingresar nuevo gasto al registro"
                    },
                    {
                        value: 99,
                        name: "Salir"
                    },
                ]


            }
        ])

        switch (action.chosenItem) {
            case 1:
                await getAllExpenses();
                break;
            case 2:
                await logNewExpenses();
                break;
            case 99:
                run = false;
                break;
            default:
                run = false;
                break
        }


    }

};

main();