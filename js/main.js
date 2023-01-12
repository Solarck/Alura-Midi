const listaDeTeclas = document.querySelectorAll('.tecla')

function TocaSom(audio) {
    document.querySelector(audio).play()
}

let contador = 0

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]
    let instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`

    listaDeTeclas[contador].onclick = function () {
        TocaSom(idAudio)
    }

    contador = contador + 1

    tecla.onkeydown = function (evento) {
        // console.log(evento.code == 'Space')=
        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}