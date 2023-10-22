const datosproductos = [
    {
        nombre: "Producto 1",
        descriopcion: "Descripción del producto 1",
        precio: 100,
        imagen: "images/11.jpg",

    },
    {
        nombre: "Producto 2",
        descriopcion: "Descripción del producto 1",
        precio: 100,
        imagen: "images/10.jpg",

    },
    {
        nombre: "Producto 3",
        descriopcion: "Descripción del producto 1",
        precio: 100,
        imagen: "images/9.jpg",

    },
    {
        nombre: "Producto 4",
        descriopcion: "Descripción del producto 1",
        precio: 100,
        imagen: "images/1.jpg",

    }];


window.addEventListener("load", function () {

    const app = document.getElementById("items");
   
    datosproductos.forEach(producto => {
        app.innerHTML+=`
        
        <article class="card">
            <div class="subtitulo"><h3>Enfrascado ${producto.nombre}</h3></div>
            <img src="${producto.imagen}" alt="">
            <p>${producto.precio}</p>
            <a href="" class="cta">Comprar</a>
        </article>
        
        `;
    });
});