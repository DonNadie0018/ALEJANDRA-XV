/* CONTADOR */

const targetDate =
new Date("June 20, 2026 20:00:00").getTime();

const counter = setInterval(() => {

    const now =
    new Date().getTime();

    const distance =
    targetDate - now;

    if(distance < 0){

        clearInterval(counter);

        document.querySelector(".countdown").innerHTML =
        "<h2>Hoy es el gran día</h2>";

        return;

    }

    const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor((distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60));

    const minutes =
    Math.floor((distance % (1000 * 60 * 60))
    / (1000 * 60));

    const seconds =
    Math.floor((distance % (1000 * 60))
    / 1000);

    document.getElementById("days").innerHTML =
    days;

    document.getElementById("hours").innerHTML =
    hours;

    document.getElementById("minutes").innerHTML =
    minutes;

    document.getElementById("seconds").innerHTML =
    seconds;

}, 1000);

/* CONFIRMAR ASISTENCIA */

function confirmarAsistencia(){

    const nombre =
    document.getElementById("nombre").value;

    const personas =
    document.getElementById("personas").value;

    if(nombre === "" || personas === ""){

        alert(
        "Por favor completa todos los datos"
        );

        return;

    }

    const mensaje =
`Confirmación de asistencia

Nombre:
${nombre}

Número de personas:
${personas}

Confirmamos asistencia a los XV de Alejandra`;

    const telefono =
    "573046499939";

    const url =
`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

}

/* UBICACION */

function verUbicacion(){

    const ubicacion =
    "https://maps.app.goo.gl/7sDGuCChouayteQv8";

    window.open(
    ubicacion,
    "_blank"
    );

}

/* PARTICULAS */

const particles =
document.getElementById("particles");

for(let i = 0; i < 50; i++){

    const particle =
    document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
    Math.random() * 100 + "%";

    particle.style.animationDuration =
    (5 + Math.random() * 10) + "s";

    particle.style.opacity =
    Math.random();

    particles.appendChild(particle);

}

/* FLORES */

const flowers =
document.getElementById("flowers");

const flowerIcons = [
    "🌸",
    "✿",
    "❀"
];

for(let i = 0; i < 25; i++){

    const flower =
    document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML =
    flowerIcons[
    Math.floor(
    Math.random() * flowerIcons.length
    )];

    flower.style.left =
    Math.random() * 100 + "%";

    flower.style.animationDuration =
    (8 + Math.random() * 12) + "s";

    flower.style.fontSize =
    (18 + Math.random() * 20) + "px";

    flowers.appendChild(flower);

}