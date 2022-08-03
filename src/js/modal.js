if(document.querySelector('.intro')){
    const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.modal-btn')
const modalClose = document.querySelector('.modal-close')
const modalForm = document.querySelector('.modal-form')
const modalSubmit = document.querySelector('.modal-submit')

const nameV = document.querySelector('.modal-name')
const emailV = document.querySelector('.modal-email')
const textV = document.querySelector('.modal-text')

const nameT = document.querySelector('.modal-warning-name')
const emailT = document.querySelector('.modal-warning-email')
const textT = document.querySelector('.modal-warning-text')

const success = document.querySelector('.modal-success')

modalBtn.addEventListener('click', () => {
    modal.style.opacity = 1;
    modal.style.visibility = 'visible';
    document.body.style.overflowY = "hidden"
})

modalClose.addEventListener('click', close)

function close() {
    modal.style.opacity = 0;
    modal.style.visibility = 'hidden';
    document.body.style.overflowY = "auto"
    modalForm.reset()


    textV.classList.remove('error')
    textT.classList.remove('warning')

    emailV.classList.remove('error')
    emailT.classList.remove('warning')

    nameV.classList.remove('error')
    nameT.classList.remove('warning')

    success.classList.remove('success')

    nameV.removeEventListener('input', validateName)
    emailV.removeEventListener('input', validateEmail)
    textV.removeEventListener('input', validateText)
}

console.log(nameV.value);

const validateEmail = () => {
    if (emailV.value.trim() === "") {
        emailV.classList.add('error')
        emailT.classList.add('warning')
    } else {
        emailV.classList.remove('error')
        emailT.classList.remove('warning')
        success.classList.remove('success')
    }
}

const validateName = () => {
    if (nameV.value.trim() === "") {
        nameV.classList.add('error')
        nameT.classList.add('warning')
    } else {
        nameV.classList.remove('error')
        nameT.classList.remove('warning')
        success.classList.remove('success')
    }
}

const validateText = () => {
    if (textV.value.trim() === "") {
        textV.classList.add('error')
        textT.classList.add('warning')
    } else {
        textV.classList.remove('error')
        textT.classList.remove('warning')
        success.classList.remove('success')
    }
}

modalForm.onsubmit = (e) => {
    e.preventDefault();
    console.log('click');

    nameV.addEventListener('input', validateName)
    emailV.addEventListener("input", validateEmail)
    textV.addEventListener("input", validateText)

    validateName()
    validateEmail()
    validateText()

    if (nameV.value.trim() !== "" && emailV.value.trim() !== "" && textV.value.trim() !== "") {
        modalSubmit.style.backgroundColor = '#9FA7B0'
        modalSubmit.innerHTML = 'Идет отправка ...'
        setTimeout(() => {
            success.classList.add('success')
            modalSubmit.style.backgroundColor = '#47CF34'
            modalSubmit.innerHTML = 'Отправка'
        }, 2000)
    }
}
}