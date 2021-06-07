import cipher from './cipher.js';
//import { SourceCode } from 'eslint';

console.log(cipher);


const cifraTexto = (evento)=>{

    evento.preventDefault();
  
    const textoUsuario =  document.querySelector('[data-form-input]');
    const valor = textoUsuario.value;
    //const textoUpper = valor.toUpperCase();

    const desloc =  parseInt(prompt("Qual é a chave secreta?"));

    const fraseCifrada = document.querySelector('[data-cifra]');
    const conteudo = `<p class="content"> Mensagem:<br/><br/>${cipher.encode(desloc, valor)}</p>`;
  
    fraseCifrada.innerHTML = conteudo;
  
    textoUsuario.value = "";

};
  
const decifrarTexto = (evento)=> {
    
    evento.preventDefault();

    const decodeUsuario = document.querySelector('[data-form-input]');
    const valorDecode = decodeUsuario.value;
    //const decifraTexto = valorDecode.toUpperCase();

    const desloc =  parseInt(prompt("Qual é a chave secreta?"));


    const fraseDecifrada = document.querySelector('[data-cifra]');
    const conteudo = `<p class="content"> Mensagem:<br/><br/>${cipher.decode(desloc, valorDecode)}</p>`;

    fraseDecifrada.innerHTML = conteudo;

    decodeUsuario.value = "";
    
};

const cifra = document.querySelector('[data-form-button]');
const decifra = document.querySelector('[data-form-decode]');

cifra.addEventListener('click', cifraTexto);

decifra.addEventListener('click', decifrarTexto);
