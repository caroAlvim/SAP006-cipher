import cipher from './cipher.js';

console.log(cipher);

const cifraTexto = (evento) => {

    evento.preventDefault();

    //iniciaModal('modal-desloc');


    const textoUsuario =  document.querySelector('[data-form-input]');
    const valor = textoUsuario.value;

    const desloc =  parseInt(prompt("Qual é a chave secreta?"));

    const fraseCifrada = document.querySelector('[data-cifra]');
    const conteudo = `<p class="content"> Mensagem:<br/><br/>${cipher.encode(desloc, valor)}</p>`;
    
    fraseCifrada.innerHTML = conteudo;
  
    textoUsuario.value = "";

};
  
const decifrarTexto = (evento) => {
    
    evento.preventDefault();

    //iniciaModal('modal-desloc');

    const decodeUsuario = document.querySelector('[data-form-input]');
    const valorDecode = decodeUsuario.value;

    const desloc =  parseInt(prompt("Qual é a chave secreta?"));
    
    const fraseDecifrada = document.querySelector('[data-cifra]');
    const conteudo = `<p class="content"> Mensagem:<br/><br/>${cipher.decode(desloc, valorDecode)}</p>`;

    fraseDecifrada.innerHTML = conteudo;

    decodeUsuario.value = "";
    
};

/*
const pegarOffset = (evento) => {
    
    evento.preventDefault();
    
    const offsetUsuario = document.querySelector('[data-input-num]');
    const valorOffset = offsetUsuario.value;

    offsetUsuario.value = "";

    return valorOffset;
}; 


const iniciaModal = (modalID) => {

    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');

    modal.addEventListener('click', (evento) => {
        if(evento.target.id == modalID || evento.target.className == 'fechar'){
            modal.classList.remove('mostrar');
        } 
        else if(offset.addEventListener('click', pegarOffset) === True) {
            modal.classList.remove('mostrar');
        }
    }); 

};
*/

const cifra = document.querySelector('[data-form-encode]');
const decifra = document.querySelector('[data-form-decode]');

//const offset = document.querySelector('[data-form-offset]')

cifra.addEventListener('click', cifraTexto);
decifra.addEventListener('click', decifrarTexto);

//offset.addEventListener('click', pegarOffset);

