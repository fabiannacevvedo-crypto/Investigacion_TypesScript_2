// src/05-interfaces-type.ts
export {};

console.log("=============================================================");
console.log("  TEMA 5: INTERFACES Y TYPES ");
console.log("=============================================================\n");


console.log("interface: para objetos y clases, herencia con  extends, propiedades opcionales(¿) y solo lectura (readonly)")
console.log("type: para uniones(|), intersecciones (&), tipos literales (ADMIN | USER ) y alias")

// 1. Interface para objetos con propiedad opcional (?) y solo lectura (readonly)
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    edad?: number;              // Opcional
    readonly createdAt: Date;   // Solo lectura
}

const usuario1: Usuario = {
    id: 1,
    nombre: "María",
    email: "maria@123.com",
    createdAt: new Date()
};

console.log("1. Interface para objetos (con opcional y readonly):");
console.log(`- Usuario: ${usuario1.nombre} (${usuario1.email})`);
console.log(`- Creado en: ${usuario1.createdAt.toISOString()}`);
console.log(`- Edad opcional: ${usuario1.edad ?? "No especificada"}\n`);

// 2. Extender interfaces (extends)
interface Empleado extends Usuario {
    legajo: string;
    salario: number;
}

const empleado1: Empleado = {
    id: 2,
    nombre: "Lucas",
    email: "lucas@ipf.edu.ar",
    createdAt: new Date(),
    legajo: "EMP-2026-08",
    salario: 850000
};

console.log("2. Extender Interfaces (extends):");
console.log(`- Empleado extendido: ${empleado1.nombre}, Legajo: ${empleado1.legajo}, Salario: $${empleado1.salario}\n`);

// 3. Type alias: Uniones, literales, objetos e intersecciones
type ID = string | number;
type Rol = "ADMIN" | "USER" | "GUEST"; // Tipos literales en unión

type Coordenada = {
    x: number;
    y: number;
};

// Intersection types (&)
type EmpleadoCompleto = Empleado & {
    departamento: string;
};

const empleadoDepto: EmpleadoCompleto = {
    ...empleado1,
    departamento: "Sistemas e Informática"
};

console.log("3. Type Alias e Intersección (&):");
console.log(`- Empleado completo: ${empleadoDepto.nombre} - Depto: ${empleadoDepto.departamento}\n`);

// 4. ¿Cuándo usar cada uno? 
console.log("4. ¿Cuándo usar cada uno? (según la cátedra):");
console.log("----------------------------------------------------------------------------------");
console.log(" Usar       | Cuándo");
console.log("----------------------------------------------------------------------------------");
console.log(" interface  | Estructuras de objetos y clases, sobre todo cuando se necesita extends.");
console.log(" type       | Uniones (|), intersecciones (&), tipos literales ('ADMIN' | 'USER') y alias de primitivos.");
console.log("----------------------------------------------------------------------------------\n");
