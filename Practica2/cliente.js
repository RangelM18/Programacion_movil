// Módulo Cliente
const cliente = {
    nombre: "Carlos",
    ordenar() {
        console.log(`🧑 ${this.nombre}: Hola, quiero ordenar por favor`);
        return "orden_lista";
    },
    
    pagar(monto) {
        console.log(`🧑 ${this.nombre}: Aquí tiene $${monto}, gracias`);
    },
    
    recibirComida(plato) {
        console.log(`🧑 ${this.nombre}: Qué rico se ve mi ${plato}`);
    }
};