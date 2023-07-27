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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newExpenseRegisterPrompt = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const newExpenseRegisterPrompt = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield inquirer_1.default.prompt([
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
    ]);
});
exports.newExpenseRegisterPrompt = newExpenseRegisterPrompt;
