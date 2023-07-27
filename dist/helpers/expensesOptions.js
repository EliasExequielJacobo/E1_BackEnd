"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logNewExpenses = exports.getAllExpenses = void 0;
const fsMethods_1 = require("./fsMethods");
const expensesRegPrompts_1 = require("./expensesRegPrompts");
const getAllExpenses = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentExpenses = yield (0, fsMethods_1.getWithFS)("expenses");
    console.log(currentExpenses);
});
exports.getAllExpenses = getAllExpenses;
const logNewExpenses = () => __awaiter(void 0, void 0, void 0, function* () {
    const newExpenseData = yield (0, expensesRegPrompts_1.newExpenseRegisterPrompt)();
    const currentExpenses = yield (0, fsMethods_1.getWithFS)("expenses");
    currentExpenses.push(newExpenseData);
    yield (0, fsMethods_1.saveWithFS)("expenses", currentExpenses);
});
exports.logNewExpenses = logNewExpenses;
