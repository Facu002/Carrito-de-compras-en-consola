let manzana = document.querySelector("#manz")
let banana = document.querySelector("#bana");
let naranja = document.querySelector("#nara")
let kiwi = document.querySelector("#kiwi");
let mandarina = document.querySelector("#mand")
let uva = document.querySelector("#uvas");

let carrito = [];
manzana.addEventListener("click", ()=>{
    carrito.push(manzana.value);
    console.log(carrito);
})

banana.addEventListener("click", ()=>{
    carrito.push(banana.value);
    console.log(carrito);
})

naranja.addEventListener("click", ()=>{
    carrito.push(naranja.value);
    console.log(carrito);
})

kiwi.addEventListener("click", ()=>{
    carrito.push(kiwi.value);
    console.log(carrito);
})

mandarina.addEventListener("click", ()=>{
    carrito.push(mandarina.value);
    console.log(carrito);
})

uva.addEventListener("click", ()=>{
    carrito.push(uva.value);
    console.log(carrito);
})

