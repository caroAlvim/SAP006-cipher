import cipher from './cipher.js';

console.log(cipher);


const pegarTexto = (evento)=>{

    evento.preventDefault()
  
    const textoUsuario =  document.querySelector('[data-form-input]')
    const valor = textoUsuario.value 
    
    const fraseCifrada = document.querySelector('[data-cifra')
    const conteudo = `<p class="content">${valor}</p>`
  
    fraseCifrada.innerHTML = conteudo
  
    textoUsuario.value = " "
  
};
  
const decifrarTexto = ()=>{
  
}

const cifra = document.querySelector('[data-form-button]')
const decifra = document.querySelector('[data-form-decode]')

cifra.addEventListener('click', pegarTexto)

decifra.addEventListener('clck', decifrarTexto)


//let frase = prompt ("escreva aqui a sua msg para ser cifrada")
//colocar toda a interação entre o js e html 
// importar as funçoes
//printar as msgs cifradas (domumentGetElement ?)
// printar as msgs decifradas

// manipulaçao de DOM