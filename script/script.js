ocultarTabla();

function ocultarTabla() {
    document.getElementById('paises').style.visibility = 'hidden';
}

function mostrarTabla() {
    document.getElementById('paises').style.visibility = 'visible';
}

//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];


agregarMonitores();
//funcion para agregar listeners a los botones
function agregarMonitores() {

    let boton1 = document.getElementById("mostrarPaises");
    boton1.addEventListener("click", mostrarTabla);

    let boton2 = document.getElementById("agregarPais");
    boton2.addEventListener("click", agregarPais);

}

mostrarPaises();
//funcion que mostrara los paises en la pagina
function mostrarPaises() {

    let valores1 = "";
    let valores2 = "";
    let valores3 = "";
    let valores4 = "";
    let valores5 = "";
    for (let i = 0; i < 1; i++) {
        valores1 += `<tbody><tr>
    <td>${paises[0].nombre}</td>
    <td>${paises[0].capital}</td>
    <td>${paises[0].idioma_oficial}</td>
    <td>${paises[0].moneda}</td>
    </tr></tbody><tfoot><tr><td colspan="4"><img src="${paises[0].bandera}" alt="Imagen_bandera_Guatemala"></td></tr></tfoot>`;
        valores2 += `<tbody><tr>
    <td>${paises[1].nombre}</td>
    <td>${paises[1].capital}</td>
    <td>${paises[1].idioma_oficial}</td>
    <td>${paises[1].moneda}</td>
    </tr></tbody><tfoot><tr><td colspan="4"><img src="${paises[1].bandera}" alt="Imagen_bandera_Argentina"></td></tr><tfoot>`;
        valores3 += `<tbody><tr>
    <td>${paises[2].nombre}</td>
    <td>${paises[2].capital}</td>
    <td>${paises[2].idioma_oficial}</td>
    <td>${paises[2].moneda}</td>
    </tr></tbody><tfoot><tr><td colspan="4"><img src="${paises[2].bandera}" alt="Imagen_bandera_Francia"></td></tr><tfoot>`;
        valores4 += `<tbody><tr>
    <td>${paises[3].nombre}</td>
    <td>${paises[3].capital}</td>
    <td>${paises[3].idioma_oficial}</td>
    <td>${paises[3].moneda}</td>
    </tr></tbody><tfoot><tr><td colspan="4"><img src="${paises[3].bandera}" alt="Imagen_bandera_El_Salvador"></td></tr><tfoot>`;
        valores5 += `<tbody><tr>
    <td>${paises[4].nombre}</td>
    <td>${paises[4].capital}</td>
    <td>${paises[4].idioma_oficial}</td>
    <td>${paises[4].moneda}</td>
    </tr></tbody><tfoot><tr><td colspan="4"><img src="${paises[4].bandera}" alt="Imagen_bandera_Honduras"></td></tr><tfoot>`;
    }
    document.getElementById('pais1').innerHTML += valores1;
    document.getElementById('pais2').innerHTML += valores2;
    document.getElementById('pais3').innerHTML += valores3;
    document.getElementById('pais4').innerHTML += valores4;
    document.getElementById('pais5').innerHTML += valores5;

}



//funcion que permite agregar un pais al arreglo
function agregarPais() {
    mostrarTabla();
    let nombre1 = prompt("Ingresa nombre del País");
    let capital1 = prompt("Ingresa Capital del País");
    let idioma_oficial1 = prompt("Ingresa Idioma del País");
    let moneda1 = prompt("Ingresa Moneda del País");
    let bandera1 = prompt("Ingresa dirección url de imagen bandera");

    if (nombre1, capital1, idioma_oficial1, moneda1, bandera1 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se ha ingresado ningún dato',

        });
    } else {
        const nuevo = paises.unshift({ nombre1, capital1, idioma_oficial1, moneda1, bandera1 });

        let tabla1 = "";

        for (let i = 0; i < 1; i++) {
            tabla1 += `<table><thead><th>Nombre:</th><th>Capital:</th><th>Idioma:</th><th>Moneda:</th></thead><tbody><tr>
            <td>${paises[0].nombre1}</td>
            <td>${paises[0].capital1}</td>
            <td>${paises[0].idioma_oficial1}</td>
            <td>${paises[0].moneda1}</td>
            </tr></tbody><tfoot><tr><td colspan="4"><img src="${paises[0].bandera1}" alt="Imagen_bandera"></td></tr><tfoot></table>`;

        }
        document.getElementById('nuevo').innerHTML += tabla1;

    }
}


