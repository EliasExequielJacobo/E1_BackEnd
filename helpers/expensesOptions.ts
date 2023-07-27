import { getWithFS, saveWithFS } from "./fsMethods";
import { newExpenseRegisterPrompt } from "./expensesRegPrompts";

export const getAllExpenses = async() => {

    const currentExpenses = await getWithFS("expenses");
    
    console.log(currentExpenses);

};



export const logNewExpenses = async() =>{
    const newExpenseData = await newExpenseRegisterPrompt();

    const currentExpenses = await getWithFS("expenses");

    currentExpenses.push( newExpenseData );

    await saveWithFS("expenses", currentExpenses);

}