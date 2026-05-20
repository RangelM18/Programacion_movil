// INVESTIGAR: filter(), find()
// OBJETIVO: Buscar productos baratos, caros, bebidas, postres

import { catalogo } from './catalogo.js';

// Productos baratos (precio < 40)
export function buscarProductosBaratos() {
  const baratos = catalogo.filter(producto => producto.precio < 40);
  console.log("=== PRODUCTOS BARATOS (< $40) ===");
  baratos.forEach(p => console.log(`💰 ${p.nombre} - $${p.precio}`));
  return baratos;
}

// Productos caros (precio >= 60)
export function buscarProductosCaros() {
  const caros = catalogo.filter(producto => producto.precio >= 60);
  console.log("=== PRODUCTOS CAROS (≥ $60) ===");
  caros.forEach(p => console.log(`💎 ${p.nombre} - $${p.precio}`));
  return caros;
}

// Buscar bebidas
export function buscarBebidas() {
  const bebidas = catalogo.filter(producto => producto.categoria === "Bebida");
  console.log("=== BEBIDAS ===");
  bebidas.forEach(p => console.log(`☕ ${p.nombre} - $${p.precio} (${p.tipo})`));
  return bebidas;
}

// Buscar postres (pastelería o pan)
export function buscarPostres() {
  const postres = catalogo.filter(producto => 
    producto.categoria === "Comida" && (producto.tipo === "Pastelería" || producto.tipo === "Pan")
  );
  console.log("=== POSTRES ===");
  postres.forEach(p => console.log(`🍰 ${p.nombre} - $${p.precio}`));
  return postres;
}

// Buscar producto específico por ID con find()
export function buscarProductoPorId(id) {
  const producto = catalogo.find(p => p.id === id);
  if (producto) {
    console.log(`✅ Producto encontrado: ${producto.nombre} - $${producto.precio}`);
  } else {
    console.log(`❌ No se encontró producto con ID ${id}`);
  }
  return producto;
}