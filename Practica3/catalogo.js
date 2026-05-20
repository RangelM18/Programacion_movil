// INVESTIGAR: map(), forEach()
// OBJETIVO: Mostrar menú dinámico, promociones, productos disponibles

export const catalogo = [
  { id: 1, nombre: "Capuchino", precio: 59, tamanio: "Grande", categoria: "Bebida", tipo: "Café caliente" },
  { id: 2, nombre: "Latte", precio: 55, tamanio: "Mediano", categoria: "Bebida", tipo: "Café caliente" },
  { id: 3, nombre: "Frappé caramelo", precio: 75, tamanio: "Grande", categoria: "Bebida", tipo: "Café frío" },
  { id: 4, nombre: "Pan de muerto", precio: 35, tamanio: "Único", categoria: "Comida", tipo: "Pan" },
  { id: 5, nombre: "Muffin de chocolate", precio: 40, tamanio: "Único", categoria: "Comida", tipo: "Pastelería" },
  { id: 6, nombre: "Cuernito", precio: 35, tamanio: "Único", categoria: "Comida", tipo: "Pan" },
  { id: 7, nombre: "Agua", precio: 20, tamanio: "Chico", categoria: "Bebida", tipo: "Agua" }
];

// Promociones (descuento del 15%)
export const promociones = [1, 3, 5]; // IDs de productos en promoción

// Función para mostrar menú dinámico con map()
export function mostrarMenuDinamico() {
  console.log("=== MENÚ DINÁMICO CAFETERÍA JS ===");
  
  const menuFormateado = catalogo.map(producto => {
    const esPromocion = promociones.includes(producto.id);
    const precioMostrado = esPromocion 
      ? `$${producto.precio} → $${(producto.precio * 0.85).toFixed(2)} (15% OFF)` 
      : `$${producto.precio}`;
    
    return `${producto.id}. ${producto.nombre} - ${precioMostrado} [${producto.categoria}]`;
  });
  
  menuFormateado.forEach(item => console.log(item));
  console.log("================================");
}

// Mostrar solo promociones con forEach()
export function mostrarPromociones() {
  console.log("=== PROMOCIONES DEL DÍA (15% descuento) ===");
  catalogo.forEach(producto => {
    if (promociones.includes(producto.id)) {
      const precioConDescuento = (producto.precio * 0.85).toFixed(2);
      console.log(`🎉 ${producto.nombre} - $${producto.precio} → $${precioConDescuento}`);
    }
  });
  console.log("==========================================");
}

// Mostrar productos disponibles por categoría
export function mostrarProductosPorCategoria(categoria) {
  const productos = catalogo.filter(p => p.categoria === categoria);
  console.log(`=== ${categoria}s disponibles ===`);
  productos.forEach(p => console.log(`- ${p.nombre} ($${p.precio})`));
}