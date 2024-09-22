const girasolContainer = document.getElementById('girasol-container');
const totalPetalos = 20;  // Número total de pétalos del girasol

function crearPetalo(angulo) {
    const petalo = document.createElement('div');
    petalo.classList.add('petalo');
    petalo.style.transform = `rotate(${angulo}deg) translate(0, -90px)`; // Corregimos la posición del pétalo
    girasolContainer.appendChild(petalo);
}

// Generar pétalos en círculo
for (let i = 0; i < totalPetalos; i++) {
    const angulo = (i * 360) / totalPetalos;
    crearPetalo(angulo);
}
