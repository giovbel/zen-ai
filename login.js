'use strict'

const button = document.getElementById('login')

const validarLogin = async () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if (email == '' || password == '') {
        alert('Preencha os Campos Corretamente !!')
    } else {
        const url = 'https://back-login.vercel.app/usuarios'
        const users = await fetch(url)

        const listUsers = await users.json()

        console.log(listUsers);

        let validaUser = false

        listUsers.forEach(user => {
            if(user.email == email && user.senha == password){
                validaUser = true
                window.location.href = './home.html'
            }
        });

        if(!validaUser){
            alert('Usuário não Cadastrado !!')
        }

    }
}

button.addEventListener('click', validarLogin)