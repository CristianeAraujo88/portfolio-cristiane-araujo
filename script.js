// ================================
// MENU RESPONSIVO
// ================================
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("ativo");
});

// Fecha o menu ao clicar em um link no celular
const linksMenu = document.querySelectorAll(".nav a");
linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("ativo");
    });
});

// ================================
// TEMA CLARO / ESCURO
// ================================
const temaBtn = document.getElementById("tema-btn");

temaBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        temaBtn.textContent = "☀️ Tema";
    } else {
        temaBtn.textContent = "🌙 Tema";
    }
});

// ================================
// VALIDAÇÃO DO FORMULÁRIO
// ================================
const form = document.getElementById("formContato");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

const erroNome = document.getElementById("erro-nome");
const erroEmail = document.getElementById("erro-email");
const erroMensagem = document.getElementById("erro-mensagem");
const mensagemStatus = document.getElementById("mensagem-status");

// Expressão regular simples para e-mail válido
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Limpa mensagens anteriores
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroMensagem.textContent = "";
    mensagemStatus.textContent = "";

    let formularioValido = true;

    // Validação do nome
    if (nome.value.trim() === "") {
        erroNome.textContent = "Por favor, informe seu nome.";
        formularioValido = false;
    }

    // Validação do e-mail
    if (email.value.trim() === "") {
        erroEmail.textContent = "Por favor, informe seu e-mail.";
        formularioValido = false;
    } else if (!regexEmail.test(email.value.trim())) {
        erroEmail.textContent = "Digite um e-mail válido.";
        formularioValido = false;
    }

    // Validação da mensagem
    if (mensagem.value.trim() === "") {
        erroMensagem.textContent = "Por favor, escreva sua mensagem.";
        formularioValido = false;
    }

    // Simulação de envio
    if (formularioValido) {
        mensagemStatus.textContent = "Mensagem enviada com sucesso!";
        mensagemStatus.style.color = "green";

        form.reset();
    } else {
        mensagemStatus.textContent = "Corrija os campos indicados.";
        mensagemStatus.style.color = "red";
    }
});