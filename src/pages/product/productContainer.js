export function getProductosEnCarrito() {
    const productosEnCarrito = JSON.parse(localStorage.getItem('productos-en-carrito')) || [];
    return productosEnCarrito;
}