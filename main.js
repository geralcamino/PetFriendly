import {Formulario} from './firebase.js';

window.addEventListener('DOMContentLoaded',()=>{
console.log('holi')

} )

const loginForm =document.getElementById('loginform') 

loginForm.addEventListener('submit',(e) => { e.preventDefault()

const usuario = loginForm['Usuario']
const contraseña = loginForm['Contrasenia']

Formulario(usuario.value,contraseña.value)


document.getElementById('loginform').reset();

})