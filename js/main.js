const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const verProducto = ({ id, nombre, precio, descripcion, stock, urlImg }) => {
  const contenedorTarjetas = document.querySelector("#contenedorTarjetas");
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";
  tarjeta.innerHTML = `
                        <img src="${urlImg}" alt="">
                        <div class="contenido">
                            <h3>${nombre}</h3>
                            <p>${descripcion}</p>
                            <span><b>Precio:</b> ${precio}$</span>
                        </div>
                        <form id="formCarrito${id}">
                        <input name="id" type="hidden" value="${id}">
                        <input name="cantidad" type="number" value="1" min="1" max="${stock}">
                        <button type="submit">Agregar al carrito</button>
                        </form>

    `;
  contenedorTarjetas.append(tarjeta);
};
const agregarCarrito = (id) => {
  const formCarrito = document.querySelector("#formCarrito" + id);
  formCarrito.addEventListener("submit", (e) => {
    e.preventDefault();
    const cantidad = e.target.children["cantidad"].value;
    carrito.push({
      id,
      cantidad,
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    Swal.fire({
      icon: "success",
      title: "Excelente eleccion!",
      text: "Tu set se ha agregado correctamente al carrito",
    });
  });
};
const verProductos = async () => {
  const res = await fetch("./productos.json");
  const productos = await res.json();
  productos.forEach((producto) => {
    if (producto.stock != 0) {
      verProducto(producto);
      agregarCarrito(producto.id);
    }
  });
};

verProductos();

Swal.fire({
  icon: "info",
  title: "Aun seguimos trabajando en la pagina web :)",
  text: "Porfavor tened paciencia, en breve estara lista!",
});
