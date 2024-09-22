const girasolContainer = document.getElementById('girasol-container');
const pipasContainer = document.getElementById('pipas-container');
const totalPetalos = 20;  // Número total de pétalos del girasol
const totalPipas = 10; // Número total de pipas del girasol

function crearPetalo(angulo) {
    const petalo = document.createElement('div');
    petalo.classList.add('petalo');
    petalo.style.transform = `rotate(${angulo}deg) translate(0, -90px)`; // Ajusta la posición del pétalo
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
    pipa.style.transform = `rotate(${angulo}deg) translate(-10px, -50px)`; // Ajusta la posición
    pipasContainer.appendChild(pipa);
}

// Generar pipas en círculo
for (let i = 0; i < totalPipas; i++) {
    const angulo = (i * 360) / totalPipas;
    crearPipa(angulo);
}
