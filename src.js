export default function greet(name) {
    console.log(`please stand up, ${name}!`);
    console.log(`welcome, ${name}!`);  
    return `Hello, ${name}! Welcome aboard.`;
}   
export function farewell(name) {
    console.log(`goodbye, ${name}!`);
    return `Farewell, ${name}! See you next time.`;
}
export const PI = 3.14159;
export const EULER = 2.71828;
export function add(a, b) {
    return a + b;
}
export function multiply(a, b) {
    return a * b;
}
export class Calculator {
    constructor() {
        this.history = [];
    }
    add(a, b) {
        const result = a + b;
        this.history.push(`Added ${a} and ${b} to get ${result}`);
        return result;
    }
    multiply(a, b) {
        const result = a * b;
        this.history.push(`Multiplied ${a} and ${b} to get ${result}`);
        return result;
    }
    getHistory() {
        return this.history;
    }
}