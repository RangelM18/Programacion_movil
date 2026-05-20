// INVESTIGAR: reduce(), destructuring
// OBJETIVO: Calcular subtotal, IVA, total

// Función para calcular totales usando reduce() y destructuring
export function calcularTotales(productos) {
  // Usando reduce() para calcular subtotal
  const subtotal = productos.reduce((total, producto) => {
    return total + producto.precio;
  }, 0);
  
  const IVA = subtotal * 0.16; // IVA del 16%
  const total = subtotal + IVA;
  
  return {
    subtotal: subtotal,
    iva: IVA,
    total: total
  };
}

// Versión con destructuring en parámetros
export function calcularTotalesConDestructuring(productos) {
  const subtotal = productos.reduce((total, { precio }) => total + precio, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;
  
  // Destructuring del resultado
  return { subtotal, iva, total };
}

// Mostrar factura formateada
export function mostrarFactura(pedido, cliente) {
  const { subtotal, iva, total } = calcularTotales(pedido);
  
  console.log("\n=== FACTURA ===");
  console.log(`Cliente: ${cliente.nombre}`);
  console.log("---");
  pedido.forEach(({ nombre, precio }) => {
    console.log(`${nombre}: $${precio}`);
  });
  console.log("---");
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`IVA (16%): $${iva.toFixed(2)}`);
  console.log(`TOTAL: $${total.toFixed(2)}`);
  console.log("==============\n");
  
  return { subtotal, iva, total };
}