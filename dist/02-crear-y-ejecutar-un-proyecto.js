/**
 * ============================================================================
 * Tema 2: Crear y Ejecutar un Proyecto
 * ============================================================================
 * - Herramientas: tsc revisa, tsx ejecuta y @types/node le explica a TS qué es Node.
 * - Instalación local en devDependencies (-D).
 * - Archivo tsconfig.json: configuración del compilador (include, strict, target, module, outDir).
 * - Diferencias de ejecución:
 *     * tsc: Compila (verifica tipos y genera .js en dist/).
 *     * tsx: Transpila (genera JS en memoria sin verificar tipos, para desarrollo rápido).
 *     * node archivo.ts: Type stripping (borra tipos y ejecuta JS; no soporta enums ni verifica).
 */
console.log("=============================================================");
console.log("  TEMA 2: CREAR Y EJECUTAR UN PROYECTO - UNIDAD 4 (IPF)     ");
console.log("=============================================================\n");
const herramientas = [
    {
        paquete: "typescript (tsc)",
        queHace: "Verifica tipos y compila a JavaScript (.js en dist/).",
        cuandoActua: "npm run check / npm run build"
    },
    {
        paquete: "@types/node",
        queHace: "Describe a TypeScript la API de Node (process, fs, etc.).",
        cuandoActua: "Siempre que TypeScript analiza el código (editor y tsc)"
    },
    {
        paquete: "tsx",
        queHace: "Ejecuta .ts sin compilar, con recarga automática al vuelo.",
        cuandoActua: "npm run dev"
    }
];
console.log("1. Las herramientas del proyecto:");
console.log("   (Regla mnemotécnica: tsc revisa, tsx ejecuta y @types/node le explica a TS qué es Node)\n");
herramientas.forEach((h, i) => {
    console.log(`[${i + 1}] Paquete: ${h.paquete}`);
    console.log(`    - Qué hace: ${h.queHace}`);
    console.log(`    - Cuándo actúa: ${h.cuandoActua}`);
});
// 2. tsconfig.json según la cátedra:
console.log("\n2. Para qué sirve tsconfig.json:");
console.log("- Le indica a TypeScript qué archivos forman el proyecto (include: ['src']).");
console.log("- Qué tan estricto debe ser al verificar tipos (strict: true, noEmitOnError: true).");
console.log("- Cómo generar el JavaScript: versión (target: ES2022), sistema de módulos (module: nodenext) y salida (outDir: ./dist).");
console.log("- Define que la carpeta es un proyecto TypeScript.");
const comparativas = [
    { herramienta: "tsc", accion: "Verifica tipos y genera JavaScript en dist/", tipoProceso: "Compilar", detectaErroresDeTipo: true },
    { herramienta: "tsx", accion: "Genera JavaScript en memoria sin verificar tipos", tipoProceso: "Transpilar", detectaErroresDeTipo: false },
    { herramienta: "node archivo.ts", accion: "Solo borra las anotaciones de tipos (Node 24/26)", tipoProceso: "Type stripping (quitar tipos)", detectaErroresDeTipo: false }
];
console.log("\n3. Diferencias de ejecución (tsc vs tsx vs node):");
comparativas.forEach((c) => {
    console.log(`* ${c.herramienta.padEnd(16)} | Proceso: ${c.tipoProceso.padEnd(16)} | ¿Verifica tipos al ejecutar?: ${c.detectaErroresDeTipo ? "SÍ" : "NO"}`);
});
console.log("\n-> Regla para recordar: src/ tiene lo que escribimos, dist/ tiene lo que se ejecuta.");
console.log("-> En producción se usa: npm run build && npm start\n");
export {};
//# sourceMappingURL=02-crear-y-ejecutar-un-proyecto.js.map