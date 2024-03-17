function generarMatriz() {
    const filas = parseInt(document.getElementById('filas').value);
    const columnas = parseInt(document.getElementById('columnas').value);

    if (isNaN(filas) || isNaN(columnas)) {
        alert('Por favor, ingrese números válidos para filas y columnas.');
        return;
    }

    if (filas < 1 || columnas < 1) {
        alert('El número de filas y columnas debe ser al menos 1.');
        return;
    }

    let html = '';
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            html += `<input type="number" id="m${i}-${j}" class="matrix-cell">`;
        }
        html += '<br>';
    }

    document.getElementById('matriz').innerHTML = html;
    document.getElementById('matriz-container').style.display = 'block';
}

function realizarOperacion(operacion) {
    let resultado = 0;

    const filas = parseInt(document.getElementById('filas').value);
    const columnas = parseInt(document.getElementById('columnas').value);

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            const valor = parseFloat(document.getElementById(`m${i}-${j}`).value);
            if (isNaN(valor)) {
                alert('Por favor, ingrese valores válidos para todos los elementos de la matriz.');
                return;
            }
            switch (operacion) {
                case 'suma':
                    resultado += valor;
                    break;
                case 'resta':
                    resultado -= valor;
                    break;
                case 'multiplicacion':
                    if (resultado === 0) {
                        resultado = valor;
                    } else {
                        resultado *= valor;
                    }
                    break;
            }
        }
    }

    document.getElementById('resultado').innerHTML = `El resultado de la operación ${operacion} es: ${resultado}`;
}

function mostrarResultado() {
    document.getElementById('resultado').style.display = 'block';
}

//Carrucel
let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-img');
    const totalSlides = slides.length;
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    function showSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        currentIndex = index;

        const offset = -currentIndex * 100;
        document.getElementById('carousel-images').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Autoplay
    setInterval(nextSlide, 3000);