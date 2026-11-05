/**
 * ============================================================================
 * Tema 3: Tipos Básicos
 * ============================================================================
 * - Primitivos: string, number, boolean.
 * - Arrays tipados (tipo[]) y Tuplas ([tipo, tipo]).
 * - Inferencia de tipos.
 * - Tipos Unión (string | number), null y undefined con strict.
 * - any (desactiva verificación, evitar) vs unknown (obliga a verificar con typeof).
 */

console.log("=============================================================");
console.log("  TEMA 3: TIPOS BÁSICOS                   ");
console.log("=============================================================\n");

// 1. Primitivos
let nombre: string = "Marcos";
let edad: number = 30;
let activo: boolean = true;

console.log("1. Primitivos (string, number, boolean):");
console.log(`- nombre: "${nombre}" (tipo string)`);
console.log(`- edad: ${edad} (tipo number)`);
console.log(`- activo: ${activo} (tipo boolean)\n`);

// 2. Arrays y Tuplas
let numeros: number[] = [1, 2, 3];
let nombres: string[] = ["jose", "Luis"];

// Tuplas: cantidad y tipo fijos en cada posición según la guía de la cátedra
let usuario: [string, number] = ["Juan", 25];

console.log("2. Arrays y Tuplas:");
console.log(`- Array de números: [${numeros.join(", ")}]`);
console.log(`- Array de nombres: [${nombres.join(", ")}]`);
console.log(`- Tupla [string, number]: Nombre=${usuario[0]}, Edad=${usuario[1]}\n`);

// 3. Inferencia de tipos
let ciudad = "Formosa"; // TypeScript infiere automáticamente que es string
console.log("3. Inferencia de tipos:");
console.log(`- let ciudad = "Formosa"; -> TypeScript infiere el tipo string automáticamente.\n`);

// 4. Union types, null y undefined con strict activado
console.log("Un tipo Unión (Union Type) en TypeScript permite que una variable, parámetro o propiedad pueda guardar más de un tipo de dato diferente");
let id: string | number = "ABC123";
console.log("4. Tipos Unión (string | number):");
console.log(`- id con valor string: ${id}`);
id = 456;
console.log(`- id reasignado con valor number: ${id}`);

// Null: con strict, hay que declararlo explícitamente
let opcional: string | null = "Formosa";
if (opcional !== null) {
    console.log(`- opcional verificado: "${opcional}" tiene longitud ${opcional.length}`);
}

// 5. any vs unknown (según la teoría de la guía)
console.log("5. any y unknown:");
console.log("- any: Desactiva la verificación de tipos de TypeScript. Sin error al escribir, pero falla al ejecutar.");

let dato: unknown = "texto de prueba";
// dato.toUpperCase(); // Error de compilación porque unknown obliga a verificar

if (typeof dato === "string") {
    // Correcto: dentro del if TypeScript sabe que es string
    console.log(`- unknown verificado con typeof: "${dato.toUpperCase()}"`);
}
console.log("- Regla: Cuando no se conoce el tipo de un valor (ej. datos de una API), se usa unknown en lugar de any.\n");
