# Saving Romeo & Juliet

Projeto para troca de mensagens secretas entre adolescentes, utilizando o método Cifra de César.



![saving-romeo-juliet](https://github.com/caroAlvim/SAP006-cipher/blob/357c63e6a9d11a8d7e7cfee5cf63ea453a59c92e/src/img/Logo2.png)



## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Objetivo](#2-objetivo)
* [3. Tema](#3-tema)
* [4. Público alvo](#4-publico-alvo)
* [5. Instruções de uso](#5-instrucoes-de-uso)
* [6. UX/UI](#6-ux-ui)
* [7. Objetivos de aprendizagem](#7-objetivos-de-aprendizagem)
* [8. Cifra de César](#8-cifra-de-cesar)


## 1. Resumo do projeto

"Saving Romeo & Juliet" é uma aplicação web para criptografar mensagens usando o método Cifra de César. Neste projeto, o usuário envia o texto e seleciona um número secreto para cifrá-lo. O número funciona como uma chave secreta que codifica e  que também permite decifrar. As mensagens podem ser compartilhadas através de aplicativos de mensagens. 

Primeiro projeto desenvolvido para o bootcamp **Laboratoria**.


## 2. Objetivo

Permitir a troca de mensagens criptografadas através de aplicativos de mensagens.


## 3. Tema

Por que "Salvando Romeo e Julieta"?

Esta é a história de amor mais famosa da dramaturgia mundial. Romeo e Julieta são jovens apaixonados que devido a rivalidade entre suas familias, não puderam vivenciar a plenitude do romance. Uma falha na comunicação entre o casal - uma carta extraviada -  fez com que conhecessem um trágico fim. 

No mundo contemporâneo, a história do casal teria um final bem diferente. Uma ou duas mensagens enviadas através de aplicativos de comunicação teriam evitado este triste desfecho.

A tecnologia evolui, mas os amores proibidos são eternos. E pensando em jovens adolescentes que nos dias atuais não podem desfrutar de liberdade para amar, seja impossibilitado por pais repressores, conservadores ou por julgamentos moralistas da sociedade, "Saving Romeo & Juliet" busca ajudar casais apaixonados a trocarem mensagens criptografadas entre si e desta forma, evitar invasões indesejadas e espionagens nos apps de mensagens, garantido assim a privacidade na comunicação.

Romeos & Julietas, Julietas & Julietas e Romeos & Romeos estarão salvos.


![Romeo-Julieta](https://github.com/caroAlvim/SAP006-cipher/blob/main/src/img/romeo-julieta.gif)



## 4. Publico alvo:

Jovens adolescentes que ainda vivem sob a tutela de familiares e que, por algum motivo, não possuem total liberdade para expressarem-se. 

> "Ninguém vai poder querer nos dizer como amar",
> Jonnhy Hooker


## 5. Instruções de uso 

* Sugestão 1: 
    
    Combinar um número secreto antes de enviar as mensagens para cifrar e decifrar;

* Sugestão 2:

    Enviar a primeira palavra da mensagem com a quantidade de letras para o ciframento.
    Ex: Shakespeare (11 letras), chave número 11. 
    
**Mensagem**: Shakespeare Hoje sonhei com vc

**Cifrada**: Dslvpdaplcp+Szup+dzyspt+nzx+gn



## 6. UX/UI 

* **Interface**

A interface é minimalista, apresenta uma janela para adicionar o texto, botão de apresentação, dois botões - Codificar/Decifrar - e o logo.

![tela-inicial](https://github.com/caroAlvim/SAP006-cipher/blob/main/src/img/tela-inicial.png)

![tela-mensagem](https://github.com/caroAlvim/SAP006-cipher/blob/main/src/img/tela-msg.png)

![tela-cripto](https://github.com/caroAlvim/SAP006-cipher/blob/main/src/img/tela-cripto.png)

* **Botão de chave de deslocamento (offset)**

Botão modal "pop up" para apresentação - "sobre". 

![tela-sobre](https://github.com/caroAlvim/SAP006-cipher/blob/main/src/img/tela%20sobre.png)


* **Logo**

Simulação de um balcão - momento importante na história de Romeo e Julieta. Para remeter ao balcão, foram adicionados personagens na parte superior do logo e outros na região inferior.
Utiliza-se personagens em 2D para criar efeito lúdico e descontraído. 

![saving-romeo-juliet](https://github.com/caroAlvim/SAP006-cipher/blob/main/src/img/Logo1.png)


## 7. Objetivos de aprendizagem

Neste projeto o objeto é construir uma aplicação web (_WebApp_) para
interagir com o usuário final através do navegador utilizando HTML, CSS e
JavaScript como ferramentas.

### HTML e CSS

* [Uso de HTML semântico.](https://developer.mozilla.org/pt-BR/docs/Glossario/Semantica#Sem%C3%A2ntica_em_HTML)
* Uso de seletores de CSS.

### DOM

* Uso de seletores do DOM.
* Manipular eventos do DOM.
* [Manipulação dinâmica do DOM.](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* Manipulação de strings.
* Uso de condicionais (if-else | switch | operador ternário)
* Uso de laços _(loops)_ (for | for..in | for..of | while)
* Uso de funções (parâmetros | argumentos | valor de retorno)
* Declaração correta de variáveis (const & let)

### Testing

* [Teste unitário.](https://jestjs.io/docs/pt-BR/getting-started)

### Estrutura do código e guia de estilo

* Organizar e dividir o código em módulos (Modularização)
* Uso de identificadores descritivos (Nomenclatura | Semântica)
* Uso de linter (ESLINT)

### Git e GitHub

* Uso de comandos de git (add | commit | pull | status | push)
* Gerenciamento de repositorios de GitHub (clone | fork | gh-pages)

### UX

* Desenhar a aplicação pensando e entendendo o usuário.
* Criar protótipos para obter feedback e iterar.
* Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)


## 8. Cifra de César

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)


A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

***
