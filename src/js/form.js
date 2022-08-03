if (document.querySelector('.marketing') || document.querySelector('.training')) {
    // const modalBtn = document.querySelector('.marketing-btn')
    const modalForm = document.querySelector('.form')
    const modalSubmit = document.querySelector('.marketing-btn')

    const nameV = document.querySelector('.marketing-name')
    const emailV = document.querySelector('.marketing-email')

    const nameT = document.querySelector('.marketing-warning-name')
    const emailT = document.querySelector('.marketing-warning-email')

    // const success = document.querySelector('.modal-success')



    console.log(nameV.value);

    const validateEmail = () => {
        if (emailV.value.trim() === "") {
            emailV.classList.add('error')
            emailT.classList.add('warning')
        } else {
            emailV.classList.remove('error')
            emailT.classList.remove('warning')
        }
    }

    const validateName = () => {
        if (nameV.value.trim() === "") {
            nameV.classList.add('error')
            nameT.classList.add('warning')
        } else {
            nameV.classList.remove('error')
            nameT.classList.remove('warning')
        }
    }



    modalForm.onsubmit = (e) => {
        e.preventDefault();
        console.log('click');

        nameV.addEventListener('input', validateName)
        emailV.addEventListener("input", validateEmail)

        validateName()
        validateEmail()

        if (nameV.value.trim() !== "" && emailV.value.trim() !== "") {
            modalSubmit.style.backgroundColor = '#9FA7B0'
            modalSubmit.innerHTML = 'Идет отправка ...'
            setTimeout(() => {
                modalSubmit.style.backgroundColor = '#47CF34'
                modalSubmit.innerHTML = 'Получить консультацию'
                modalForm.reset()
            }, 2000)
        }
    }
}