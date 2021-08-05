import cipher from './cipher.js';


const cifraTexto = (e) => {
    e.preventDefault();

    const textoUsuario =  document.querySelector('[data-form-input]');
    const valor = textoUsuario.value;

    const encodeNumber =  parseInt(prompt("Qual é a chave secreta?"));
    //iniciaModal('modal-desloc');

    const fraseCifrada = document.querySelector('[data-cifra]');
    const conteudo = `<h3> Mensagem: </h3><br/>
                     <p>${cipher.encode(encodeNumber, valor)}</p><br/>
                     <p> Sua chave secreta é ${encodeNumber}</p>
                    `;
    
    fraseCifrada.innerHTML = conteudo;
    textoUsuario.value = "";

    
};
  
const decifrarTexto = (e) => { 
    e.preventDefault();

    const decodeUsuario = document.querySelector('[data-form-input]');
    const valorDecode = decodeUsuario.value;

    const decodeNumber =  parseInt(prompt("Qual é a chave secreta?"));
    //colocar o modal dentro do desloc
    

    const fraseDecifrada = document.querySelector('[data-cifra]');
    const conteudo = `<h3> Mensagem: </h3><br/>
                     <p>${cipher.decode(decodeNumber, valorDecode)}</p><br/>
                     `;

    fraseDecifrada.innerHTML = conteudo;
    decodeUsuario.value = "";
    
    //trocar o nome de todas as variaveis  e funcoes para ingles
};

const informaTexto = (e) => {
    e.preventDefault();
    
    iniciaModal('modal-desloc');
};
    

const iniciaModal = (modalID) => {

    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');

    modal.addEventListener('click', (evento) => {
        if(evento.target.id == modalID || evento.target.className == 'fechar'){
            modal.classList.remove('mostrar');
        }       
    }); 
};

// const copyText = () => {
//     const btnCopy = document.createElement('button')

//     btnCopy.addEventListener('click', () => {
//         console.log("funcionou")
//     })
//     return btnCopy
// };

/*
const pegarOffset = (evento) => {
    
    evento.preventDefault();
    
    const offsetUsuario = document.querySelector('[data-input-num]');
    const valorOffset = offsetUsuario.value;

    offsetUsuario.value = "";

    return valorOffset;
}; 
*/

const cifra = document.querySelector('[data-form-encode]');
const decifra = document.querySelector('[data-form-decode]');
const sobre = document.querySelector('[data-form-info]');
//const copyBtn = document.querySelector('[data-btn]')

//const offset = document.querySelector('[data-form-offset]')

cifra.addEventListener('click', cifraTexto);
decifra.addEventListener('click', decifrarTexto);
sobre.addEventListener('click', informaTexto);
//copyBtn.addEventListener('click', copyText);

//offset.addEventListener('click', pegarOffset);

