// src/06-enums-literales.ts
export {};
console.log("=============================================================");
console.log("  TEMA 6: ENUMS Y TIPOS LITERALES ");
console.log("=============================================================\n");

// 1. Enum tradicional
enum Estado {
    PENDIENTE = "PENDIENTE",
    COMPLETADO = "COMPLETADO",
    CANCELADO = "CANCELADO"
}

let estadoTarea: Estado = Estado.PENDIENTE;
console.log("1. Enum Tradicional:");
console.log(`- Estado asignado: ${estadoTarea}`);
console.log(`- Objeto real generado en JavaScript:`, Estado);
console.log("  ( Los enums generan código JavaScript en runtime; funcionan con tsx y tsc, pero no con node directo en strip-only mode).\n");

// 2. Alternativa moderna (según la pág. 16 de la guía)
// Compatible con cualquier herramienta sin emitir sintaxis especial de TS:
const EstadoModerno = {
    PENDIENTE: "PENDIENTE",
    COMPLETADO: "COMPLETADO",
    CANCELADO: "CANCELADO"
} as const;

type EstadoModernoTipo = typeof EstadoModerno[keyof typeof EstadoModerno];

let estadoMod: EstadoModernoTipo = EstadoModerno.COMPLETADO;
console.log("2. Alternativa moderna recomendada por la cátedra (as const):");
console.log(`- estadoTarea: ${estadoMod}`);
console.log("  (Se usa igual: EstadoModerno.COMPLETADO y TypeScript verifica los valores de la misma manera).\n");

// 3. Tipos Literales (según pág. 20-21)
type Rol = "ADMIN" | "USER" | "GUEST";

function autorizarAccion(rol: Rol): void {
    console.log(`  -> Permiso verificado para el rol literal: [${rol}]`);
}

console.log("3. Tipos Literales ('ADMIN' | 'USER' | 'GUEST'):");
autorizarAccion("ADMIN");
autorizarAccion("USER");
console.log();

// 4. En qué se parecen y en qué se diferencian:
console.log("4. Comparativa según la Guía Teórico-Práctica:");
console.log("- En qué se parecen: Ambos permiten acotar una variable a un conjunto estricto y predefinido de valores.");
console.log("- En qué se diferencian:");
console.log("    * Runtime: El enum genera un objeto JavaScript real en memoria. El tipo literal desaparece por completo (type erasure).");
console.log("    * Compatibilidad: El enum requiere transpilación previa (tsc o tsx) y falla en 'node archivo.ts'; el tipo literal es compatible con todo el ecosistema.");
console.log("    * Cuándo usar enum: Cuando se necesita el objeto en runtime para iterar o interoperar.");
console.log("    * Cuándo usar tipos literales: Estándar moderno preferido para uniones de cadenas y estados.\n");
