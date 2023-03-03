export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },

    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.buttonClose.onclick = function() {
    //modalWrapper.classList.remove('open')
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if(event.key === 'Escape') {
        Modal.close()
    }
} //console.log(event.key) "segue a dica, esta linha mostra o nome da tecla digitada no console, que no nosso caso a tecla ESC se chama Escape."