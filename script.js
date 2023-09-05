let Nombre=document.getElementById("Nombre");
let Apellido=document.getElementById("Apellido");
let date=document.getElementById("date");
let button=document.getElementsById("button");

button.addEventListener("click", function(){
    method: "POST",
    fetch ("https://jsonplaceholder.typicode.com/users", {
    body: JSON.stringify({
        nombre: Nombre.value,
        apellido: Apellido.value,
        Date: date.value,
    })
});
alert("\nStatus: " + status)
})
