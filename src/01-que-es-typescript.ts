/** Tema 1 : ¿ Que es typescript
 * - typescrip es un superconjunto o superset de javascript el cual agrega el tipado estatico desarrollado por microsoft 
 * - las diferencias con javascrip que agrega tipado estatico opcional
 * - beneficios principales : detecta errores mientras se escribe codigo antes de ejecutarlo
 * - mejora el autocompletado y la refactorizacion en el editor
 * - hace el codigo mas mantenible y escalable
 * - los tipos funcionan como documentacion del propio codigo
 * - versiones actuales : (noviembre de 2026) typescript 7 salio el 8 de septiembre de 2026
 */
console.log("==========================================")
console.log("TEMA 1 ¿Que ES TYPESCRIPT"),
console.log("==========================================")

//1. Superconjunto tipado : variables con tipos explicitos 
const nombreLenguaje:string = "Typescript";
const desarrollador:string ="Microsoft";
const versionActual:string ="Typescript 7(julio de 2026, reescrito en Go)";


console.log("1. Definición y Desarrollador:");
console.log(`- Lenguaje: ${nombreLenguaje}`);
console.log(`- Desarrollado por: ${desarrollador}`);
console.log(`- Versión actual: ${versionActual}`);

const beneficios: string[] = [
    "Detecta errores mientras se escribe el código, antes de ejecutarlo.",
    "Mejora el autocompletado y la refactorización en el editor (VS Code).",
    "Hace el código más mantenible y escalable.",
    "Los tipos funcionan como documentación del propio código."
];


// 3. Demostración práctica: Detección temprana de errores vs tiempo de ejecución
// En JavaScript puro, una suma de texto y número provoca coerción inesperada ("10" + 5 = "105").
// En TypeScript, la función tipada asegura que solo se operen números:
function sumar(a: number, b: number): number {
    return a + b;
}