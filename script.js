const Nombre=document.getElementById("Nombre");
const Apellido=document.getElementById("Apellido");
const date=document.getElementById("date");
const button=document.getElementById("button");

button.addEventListener("click", function () {
    const data = {
        nombre: Nombre.value,
        apellido: Apellido.value,
        Fecha_de_Nacimiento: date.value,
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        alert("Respuesta del servidor: " + JSON.stringify(data));
    })
    .catch(error => {
        console.error("Error al enviar los datos: " + error);
    });
});
