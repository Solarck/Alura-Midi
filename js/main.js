const listaDeTeclas = document.querySelectorAll('.tecla')

function TocaSomPom() {
    document.querySelector('#som_tecla_pom').play()
}

let contador = 0

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = TocaSomPom
    contador = contador + 1
    console.log(contador)
}