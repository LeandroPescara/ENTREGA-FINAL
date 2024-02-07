const shopContent = document.getElementById("shopContent");
const carrito = [];

// este es mi array de objetos

const productos = [
  {
    id: 1,
    nombre: "Cafe con Leche",
    precio: 20,
    cantidad: 1,
    img: "./resources/capu.jpg",
  },
  {
    id: 2,
    nombre: "Capuccino",
    precio: 25,
    cantidad: 1,
    img: "./resources/capu.jpg",
  },
  {
    id: 3,
    nombre: "Americano",
    precio: 1,
    cantidad: 1,
    img: "./resources/capu.jpg",
  },
  {
    id: 4,
    nombre: "Descafeinado",
    precio: 3,
    cantidad: 1,
    img: "./resources/capu.jpg",
  },
];

productos.forEach((producto) => {
  const content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img class="img-producto" src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p class="precio">${producto.precio}$</p>
    `;
  shopContent.append(content);

  const BuyButton = document.createElement("button");
  BuyButton.innerText = "Comprar";
  content.append(BuyButton);

  BuyButton.addEventListener("click", () => {
    const repeat = carrito.some(
      (repeatProduct) => repeatProduct.id === producto.id
    );

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === producto.id) {
          prod.cantidad++;
          mostrarCartCounter();
        }
      });
    } else {
      carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: producto.cantidad,
        img: producto.img,
      });
      mostrarCartCounter();
    }
  });
});
