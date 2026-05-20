import { catalogo, mostrarMenuDinamico, mostrarPromociones, mostrarProductosPorCategoria } from './catalogo.js';
import { buscarProductosBaratos, buscarProductosCaros, buscarBebidas, buscarPostres, buscarProductoPorId } from './cocina.js';
import { calcularTotales, mostrarFactura } from './caja.js';

// Estado del negocio
let totalAcumulado = 0;
const pedidos = [];
let pedidoActual = [];

export const cliente = {
  nombre: "Carlos",

  // Método para ver el menú completo
  verMenu() {
    mostrarMenuDinamico();
  },

  // Método para ver promociones
  verPromociones() {
    mostrarPromociones();
  },

  // Método para filtrar productos
  filtrarProductos(tipo) {
    switch(tipo) {
      case 'baratos':
        return buscarProductosBaratos();
      case 'caros':
        return buscarProductosCaros();
      case 'bebidas':
        return buscarBebidas();
      case 'postres':
        return buscarPostres();
      default:
        console.log("Filtro no válido. Opciones: baratos, caros, bebidas, postres");
    }
  },

  // Ordenar un producto (lo agrega al pedido actual)
  ordenar(productoId) {
    const producto = buscarProductoPorId(productoId);
    if (producto) {
      console.log(`${this.nombre} quiere ordenar: ${producto.nombre}`);
      pedidoActual.push(producto);
      return producto;
    }
    return null;
  },

  // Crear nuevo pedido (finaliza el pedido actual)
  crearNuevoPedido() {
    if (pedidoActual.length === 0) {
      console.log("No hay productos en el pedido actual");
      return;
    }
    
    const { subtotal, iva, total } = mostrarFactura(pedidoActual, this);
    
    pedidos.push({
      id: pedidos.length + 1,
      productos: [...pedidoActual],
      subtotal,
      iva,
      total,
      fecha: new Date()
    });
    
    totalAcumulado += total;
    pedidoActual = []; // Reiniciar pedido actual
    
    console.log(`✅ Pedido #${pedidos.length} creado. Total acumulado del negocio: $${totalAcumulado.toFixed(2)}`);
  },

  // Ver historial de pedidos
  verPedidos() {
    console.log("\n=== HISTORIAL DE PEDIDOS ===");
    if (pedidos.length === 0) {
      console.log("No hay pedidos registrados");
      return;
    }
    
    pedidos.forEach(pedido => {
      console.log(`Pedido #${pedido.id} - $${pedido.total.toFixed(2)} - ${pedido.fecha.toLocaleDateString()}`);
      pedido.productos.forEach(p => console.log(`  - ${p.nombre}: $${p.precio}`));
      console.log("---");
    });
    console.log(`💰 Total acumulado del negocio: $${totalAcumulado.toFixed(2)}`);
  },

  // Pagar (ahora integra el flujo completo)
  pagar() {
    if (pedidoActual.length === 0) {
      console.log("No hay pedido para pagar");
      return;
    }
    console.log(`${this.nombre} procede a pagar...`);
    this.crearNuevoPedido();
  },

  recibirComida(producto) {
    console.log(`${this.nombre} recibe: ${producto.nombre}`);
  },

  // Método para ver productos disponibles por categoría
  verProductosDisponibles(categoria) {
    mostrarProductosPorCategoria(categoria);
  }
};

// DEMOSTRACIÓN COMPLETA
console.log("Bienvenido a Cafetería JS\n");

// Cliente ve el menú
cliente.verMenu();
console.log("");

// Cliente ve promociones
cliente.verPromociones();
console.log("");

// Cliente filtra productos
console.log("--- Filtrando productos ---");
cliente.filtrarProductos('bebidas');
console.log("");
cliente.filtrarProductos('baratos');
console.log("");

// Cliente realiza un pedido
console.log("--- Realizando pedido ---");
cliente.ordenar(1); // Capuchino
cliente.ordenar(4); // Pan de muerto
cliente.ordenar(3); // Frappé caramelo (en promoción)

console.log("");
cliente.pagar(); // Paga y crea pedido

// Segundo pedido
console.log("\n--- Segundo pedido ---");
cliente.ordenar(2); // Latte
cliente.ordenar(5); // Muffin
cliente.pagar();

// Ver historial
cliente.verPedidos();