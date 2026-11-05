/**
 * ============================================================================
 * Tema 4: Funciones
 * ============================================================================

*/
console.log("=============================================================");
console.log("  TEMA 4: FUNCIONES ");
console.log("=============================================================\n");
console.log("En una función se tipan los parámetros y el valor de retorno");
console.log("Con strict, los parámetros sin tipo dan error (noImplicitAny)");
console.log("Parámetro opcional (?): tiene tipo T | undefined, requiere verificación");
console.log("arámetro por defecto (= valor)");
console.log("Tipo void: indica que la función no devuelve ningún valor");
console.log("Arrow functions y Rest parameters (...nums: number[]).");
// 1. Función básica con tipado de parámetros y retorno
function sumar(a, b) {
    return a + b;
}
console.log("1. Tipos de Parámetros y Retorno:");
console.log(`- sumar(10, 20) = ${sumar(10, 20)}\n`);
// 2. Parámetro opcional (?)
// Un parámetro opcional tiene tipo string | undefined dentro de la función.
function saludar(nombre, apellido) {
    return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}
console.log("2. Parámetro Opcional (?):");
console.log(`- Sin parámetro opcional: "${saludar("pedro")}"`);
console.log(`- Con parámetro opcional: "${saludar("pedro", "Gómez")}"\n`);
// 3. Parámetro por defecto y retorno 'void'
// void indica que la función no devuelve ningún valor.
function crearUsuario(nombre, rol = "USER") {
    console.log(`  [Sistema] Usuario ${nombre} registrado con rol ${rol}`);
}
console.log("3. Parámetro por Defecto y Retorno 'void':");
crearUsuario("Marcos"); // rol toma "USER" por defecto
crearUsuario("Lucía", "ADMIN"); // rol toma el valor explícito
console.log();
// 4. Arrow function y Rest parameters
const multiplicar = (a, b) => a * b;
function sumarTodos(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}
console.log("4. Arrow Function y Rest Parameters:");
console.log(`- multiplicar(6, 7) = ${multiplicar(6, 7)}`);
console.log(`- sumarTodos(1, 2, 3, 4, 5) = ${sumarTodos(1, 2, 3, 4, 5)}\n`);
export {};
//# sourceMappingURL=04-funciones.js.map