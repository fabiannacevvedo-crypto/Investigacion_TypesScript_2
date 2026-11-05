# Glosario de TypeScript

**Trabajo Práctico Integrador: Investigación en TypeScript**  
**Instituto Politécnico Formosa**  
**Materia:** TLP II
**Guía de Referencia:** Unidad 4 - Introducción a TypeScript  
**Estudiante:** Cristian Fabian Acevedo  

Este glosario contiene 12 términos esenciales de TypeScript investigados a partir de la teoría oficial de la cátedra. Cada término incluye su definición conceptual clara y un ejemplo representativo en código TypeScript.

---

### 1. Tipado Estático 
**Definición:**  
Sistema de verificación donde los tipos de datos de las variables, parámetros y retornos se comprueban durante la escritura y compilación del código, antes de ejecutarlo. 

```typescript
let edad: number = 30;
// edad = "treinta"; // Error de compilación inmediato: Type 'string' is not assignable to type 'number'.
```

---

### 2. Superconjunto (Superset)
**Definición:**  
Condición de TypeScript respecto a JavaScript que implica la totalidad de la sintaxis y características de JavaScript agregando tipado estático opcional. Por lo tanto, todo código JavaScript válido es también código TypeScript válido.

```typescript
// Código JavaScript estándar compatible:
function saludar(nombre) {
    return "Hola " + nombre;
}

// Con la capa tipada de TypeScript:
function saludarTipado(nombre: string): string {
    return `Hola ${nombre}`;
}
```

---

### 3. Compilar vs. Transpilar vs. Type Stripping
**Definición:**  
* **Compilar:** Traducir código de un lenguaje a otro (labor de `tsc`, que analiza y verifica tipos antes de generar JavaScript).
* **Transpilar:** compilar entre lenguajes de nivel similar (labor de `tsx`, que genera JavaScript en memoria sin verificar tipos).
* **Type Stripping:** Proceso de Node.js (versiones 24 y 26) que solo borra las anotaciones de tipos al vuelo y ejecuta el código JavaScript resultante sin generar archivos ni soportar sintaxis que requiera conversión como `enum`.

```typescript
// Archivo fuente .ts con anotación de tipo:
let mensaje: string = "Hola Formosa";

// Con Type Stripping (Node) o compilación (tsc), queda en JavaScript puro:
// let mensaje = "Hola Formosa";
```

---

### 4. Inferencia de Tipos 
**Definición:**  
 el compilador de TypeScript deduce el tipo de una variable a partir del valor inicial asignado, haciendo innecesario escribir la anotación de tipo de forma redundante. La anotación explícita se reserva para variables sin valor inicial o que admitan tipos más amplios (`string | null`).

```typescript
let ciudad = "Formosa"; // TypeScript infiere automáticamente que ciudad es de tipo string
// ciudad = 42;         // Error: number no se puede asignar a string
```

---

### 5. Tipos Primitivos 
**Definición:**  
Son los tipos elementales del lenguaje: `string` (texto), `number` (enteros y números de punto flotante) y `boolean` ( `true` o `false`).

```typescript
let nombre: string = "pedro";
let edad: number = 30;
let activo: boolean = true;
```

---

### 6. Tuplas 
**Definición:**  
Estructuras de array en las que la cantidad de elementos y el tipo de dato en cada posición son fijos y conocidos de antemano.

```typescript
// Tupla con exactamente dos elementos: [string, number]
let usuario: [string, number] = ["Juan", 25];

console.log(usuario[0]); // string ("Juan")
console.log(usuario[1]); // number (25)
```

---

### 7. Tipo Unión 
**Definición:**  
Construcción sintáctica que define que una variable puede contener uno u otro tipo admisible, separándolos mediante la pleca vertical (`|`). Con `strict` activado, valores como `null` y `undefined` deben declararse y validarse obligatoriamente con condicionales antes de acceder a sus propiedades.

```typescript
let id: string | number = "ABC123";
id = 456; // Válido

let opcional: string | null = "Formosa";
if (opcional !== null) {
    console.log(opcional.length); // Correcto: dentro del if TypeScript asegura que es string
}
```

---

### 8. any vs. unknown
**Definición:**  
* **`any`:** Desactiva la verificación de tipos de TypeScript. No da error al escribir en el editor, pero expone el programa a caídas inesperadas en tiempo de ejecución. Debe evitarse.
* **`unknown`:** Acepta cualquier valor pero obliga a verificar el tipo mediante condicionales (`typeof`) antes de usarlo. Es el tipo recomendado cuando no se conoce la forma de un dato (por ejemplo, proveniente de una API).

```typescript
// Inseguro con any:
let cualquierCosa: any = "texto";
// cualquierCosa.metodoQueNoExiste(); // Falla al ejecutar

// Seguro con unknown:
let dato: unknown = "texto";
// dato.toUpperCase(); // Error en compilación
if (typeof dato === "string") {
    console.log(dato.toUpperCase()); // Correcto dentro del if
}
```

---

### 9. Parámetro Opcional y Parámetro por Defecto
**Definición:**  
* **Parámetro Opcional (`?`):** Puede omitirse al invocar la función. Internamente toma el tipo `Tipo | undefined` y requiere validación.
* **Parámetro por Defecto (`=`):** Posee un valor predeterminado que se aplica automáticamente si el invocador no pasa argumento o pasa `undefined`.

```typescript
// Parámetro opcional:
function saludar(nombre: string, apellido?: string): string {
    return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}

// Parámetro por defecto:
function crearUsuario(nombre: string, rol: string = "USER"): void {
    console.log(`Usuario ${nombre} con rol ${rol}`);
}
```

---

### 10. Interfaz 
**Definición:**  
Estructura sintáctica que describe la forma (*shape*) de los objetos y clases. Permite definir propiedades opcionales (`?`), propiedades inmutables de solo lectura (`readonly`) y herencia entre interfaces mediante la cláusula `extends`. No existe en el JavaScript compilado.

```typescript
interface Usuario {
    id: number;
    nombre: string;
    edad?: number;
    readonly createdAt: Date;
}

interface Empleado extends Usuario {
    legajo: string;
    salario: number;
}
```

---

### 11. Type Alias e Intersección
**Definición:**  
Declaración que otorga un nombre identificador a cualquier tipo de dato (uniones, tipos literales, tuplas o primitivos). Permite componer múltiples estructuras en un solo tipo mediante intersecciones con el operador ampersand (`&`).

```typescript
type ID = string | number;
type Rol = "ADMIN" | "USER" | "GUEST"; // Tipo literal en unión

type Coordenada = {
    x: number;
    y: number;
};

type EmpleadoCompleto = Empleado & {
    departamento: string;
};
```

---

### 12. Enum y Alternativa Moderna (`as const`)
**Definición:**  
* **`enum`:** Estructura que TypeScript convierte en un objeto real de JavaScript en runtime. Funciona con `tsc` y `tsx`, pero falla en Node directo en modo strip-only.
* **`as const`:** Alternativa moderna recomendada por la cátedra para crear un objeto inmutable y derivar su tipo sin emitir sintaxis especial de TypeScript, siendo compatible con cualquier herramienta.

```typescript
// Enum tradicional:
enum EstadoEnum {
    PENDIENTE = "PENDIENTE",
    COMPLETADO = "COMPLETADO"
}

// Alternativa moderna con 'as const' (compatible universalmente):
const EstadoConst = {
    PENDIENTE: "PENDIENTE",
    COMPLETADO: "COMPLETADO"
} as const;

type EstadoTipo = typeof EstadoConst[keyof typeof EstadoConst];
let tarea: EstadoTipo = EstadoConst.PENDIENTE;
```
