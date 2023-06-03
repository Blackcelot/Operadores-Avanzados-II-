const productos = [
  {
    id: 1,
    nombre: " Black knight Set",
    precio: 500,
    descripcion:
      "El Black Knight Set es un conjunto de armadura imponente y sombrío, destinado a los guerreros que caminan por el filo de la oscuridad y la muerte. Esta armadura está diseñada para aquellos valientes caballeros que se sumergen en la batalla con una ferocidad despiadada y una determinación implacable.",
    stock: 8,
    urlImg:
      "https://i.pinimg.com/564x/67/bd/77/67bd775864d7248d36aa18290c7f9bd7.jpg",
  },
  {
    id: 2,
    nombre: "Black Berserker Set",
    precio: 700,
    descripcion:
      "El Black Berserker Set es una armadura temible y oscura diseñada para aquellos guerreros intrépidos que se sumergen en el frenesí de la batalla. Esta imponente armadura se caracteriza por su apariencia intimidante y su capacidad para potenciar la ferocidad y el poder de los berserkers.",
    stock: 5,
    urlImg:
      "https://i.pinimg.com/564x/da/fd/73/dafd738bae83bd9dc774ca8c8d612c00.jpg",
  },
  {
    id: 3,
    nombre: "Black Elf Set",
    precio: 400,
    descripcion:
      "El Black Elf Set es un conjunto de armadura enigmático y misterioso diseñado para los elfos oscuros, criaturas de naturaleza sombría y habilidades mortales. Esta armadura encarna la elegancia siniestra y la destreza letal de los elfos oscuros, combinando elementos de belleza y oscuridad en un conjunto impresionante.",
    stock: 3,
    urlImg:
      "https://i.pinimg.com/564x/14/68/a1/1468a1b1fc658ac84541147f375877f5.jpg",
  },
  {
    id: 4,
    nombre: "God Paladin Set",
    precio: 1000,
    descripcion:
      "El Guardian Paladin Set es una armadura legendaria diseñada para los valientes y devotos paladines que protegen los reinos de la oscuridad. Esta imponente armadura combina la solidez de la forja en acero con la elegancia y los detalles sagrados propios de los guerreros sagrados.",
    stock: 2,
    urlImg:
      "https://i.pinimg.com/564x/1b/f9/77/1bf977c44030cc6aa0e055a2a399f313.jpg",
  },
  {
    id: 5,
    nombre: "Shadow Demon Set",
    precio: 800,
    descripcion:
      "El Shadow Demon Set es un conjunto de armadura maldito y aterrador diseñado para aquellos guerreros que han sucumbido a las fuerzas de la oscuridad. Esta armadura macabra es conocida por su apariencia siniestra y su capacidad para canalizar el poder de las sombras.",
    stock: 7,
    urlImg:
      "https://i.pinimg.com/564x/ea/5d/a7/ea5da7d8a0fb6d4c048494fe827556a7.jpg",
  },
  {
    id: 6,
    nombre: "Guardian Paladin Set",
    precio: 1000,
    descripcion:
      "El Guardian Paladin Set es un conjunto de armadura sagrada y majestuosa diseñado para los nobles paladines que dedican su vida a proteger la luz y la justicia. Esta armadura impresionante combina la nobleza de la forja en acero con la pureza y los detalles divinos propios de los guerreros sagrados.",
    stock: 5,
    urlImg:
      "https://i.pinimg.com/564x/99/a4/77/99a4771487403f5f7c8b2bb2d60f287c.jpg",
  },
  {
    id: 7,
    nombre: "Black Lancer Set",
    precio: 500,
    descripcion:
      "El Black Lancer Set es un conjunto de armadura intimidante y poderoso diseñado para los valientes lanceros que se enfrentan a sus enemigos con destreza y precisión letal. Esta armadura, de apariencia imponente, está pensada para aquellos guerreros que prefieren el combate a distancia y la embestida estratégica.",
    stock: 4,
    urlImg:
      "https://i.pinimg.com/564x/84/a7/2b/84a72bd4666fbca7f8d6132a95a4c81e.jpg",
  },
  {
    id: 8,
    nombre: "God Conqueror Set",
    precio: 1000,
    descripcion:
      "El Conjunto God Conqueror es un conjunto de armadura legendario e impresionante creado para los poderosos guerreros que han ascendido a un estado divino. Esta armadura divina representa un poder supremo y dominio, imbuida con la esencia de los propios dioses.",
    stock: 3,
    urlImg:
      "https://i.pinimg.com/564x/00/f7/3d/00f73d2849473dd2bed1d2d434737ec3.jpg",
  },
  {
    id: 9,
    nombre: "God Fighter Set",
    precio: 1000,
    descripcion:
      "El Conjunto God Fighter es un conjunto de armadura imponente y poderoso diseñado para los valientes guerreros que han sido bendecidos con el poder divino. Esta armadura sagrada encarna la fuerza y la protección de los dioses, otorgando al portador habilidades sobrehumanas y una apariencia majestuosa.",
    stock: 2,
    urlImg:
      "https://i.pinimg.com/564x/4b/97/08/4b9708d8ceaddc03fedabc461568a2b8.jpg",
  },
  {
    id: 10,
    nombre: "Black Mage Set",
    precio: 700,
    descripcion:
      "El Conjunto Black Mage es un conjunto de vestimenta enigmático y poderoso diseñado para los magos oscuros que dominan las artes arcanas más sombrías. Esta vestimenta oscura encarna el poder mágico maligno y la sed de conocimiento prohibido.",
    stock: 8,
    urlImg:
      "https://i.pinimg.com/564x/e7/81/84/e78184a4ddb0e6682fe5e498ab9a8d2a.jpg",
  },
];
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
  });
};
const verProductos = () => {
  contenedor.append(contenedorTarjetas);
  productos.forEach((producto) => {
    if (producto.stock != 0) {
      verProducto(producto);
      agregarCarrito(producto.id);
    }
  });
};

verProductos();
