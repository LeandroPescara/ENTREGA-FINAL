const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");
const cartBtn = document.getElementById( "cart-btn" );

const mostrarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";

    //modal header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.claseName = "modalclose";
    modalHeader.append(modalClose);

    modalClose.addEventListener("click", ()=> {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";

    })

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Carrito de Compras";
    modalTitle.className = "modalTitle";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    //modal Body
    carrito.forEach((producto) => {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.innerHTML = `
        <div class="producto">
            <img class="producto-img" src="${producto.img}" />
            <div class="producto-info" />
            <h4>${producto.nombre}</h4>
        </div>                         
        <div class="cantidad">
            <span class="cantidad-btn-decrementar>-</span>
            <span class="cantidad-input">${producto.cantidad}</span>
            <span class="cantidad-btn-incrementar">+</span>
        </div>
        <div class="precio"> ${producto.precio * producto.cantidad} $</div>
        <div class="eliminar-producto>❌</div>
        </div>
        `;
      modalContainer.append(modalBody);

      const decrementar = modalBody.querySelector(".cantidad-btn-decrementa")
      decrementar.addEventListener("click", () => { 
        if (producto.cantidad !== 1) {
            producto.cantidad--;
            mostrarCarrito();
            }
        });

     const incrementar = modalBody.querySelector(".cantidad-btn-incrementar")
        incrementar.addEventListener( "click", () =>{
        producto.cantidad++;
        mostrarCarrito();
        });
    });

    // modal footer
    const modalFooter = document.createElement("div")
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
    <dic class="precio-total"> total :)</div>
    `;
    modalContainer.append(modalFooter);
};

cartBtn.addEventListener("click" , mostrarCarrito); 
