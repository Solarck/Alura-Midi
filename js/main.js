const listaDeTeclas = document.querySelectorAll('.tecla')

function TocaSom(audio) {
    document.querySelector(audio).play()
}

let contador = 0

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]

    let instrumento = tecla.classList[1]

    const idAudio = `#som_${instrumento}`
    console.log(idAudio)

    listaDeTeclas[contador].onclick = function () {
        TocaSom(idAudio)
    }

    contador = contador + 1

    console.log(contador)
}