const girasolContainer = document.getElementById('girasol-container');
const pipasContainer = document.getElementById('pipas-container'); // Contenedor de pipas
const totalPetalos = 20;  // Número total de pétalos del girasol
const totalPipas = 10; // Número total de pipas del girasol

function crearPetalo(angulo) {
    const petalo = document.createElement('div');
    petalo.classList.add('petalo');
    // Cambia la posición para que los pétalos rodeen el centro
    petalo.style.transform = `rotate(${angulo}deg) translate(0, -85px)`; // Ajuste del valor de translate
    girasolContainer.appendChild(petalo);
}

// Generar pétalos en círculo
for (let i = 0; i < totalPetalos; i++) {
    const angulo = (i * 360) / totalPetalos;
    crearPetalo(angulo);
}

function crearPipa(angulo) {
    const pipa = document.createElement('div');
    pipa.classList.add('pipa');
    pipa.style.transform = `rotate(${angulo}deg) translate(-10px, -50px)`; // Ajusta la posición de las pipas
    pipasContainer.appendChild(pipa);
}

// Generar pipas en círculo
for (let i = 0; i < totalPipas; i++) {
    const angulo = (i * 360) / totalPipas;
    crearPipa(angulo);
}
