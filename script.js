/* =========================
   Formulário de Contacto
========================= */
// Seleciona o formulário pelo ID "formContacto"
const formContacto = document.getElementById('formContacto');

if (formContacto) {
    // Adiciona um ouvinte de evento para quando o formulário for enviado
    formContacto.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede reload da página ao submeter
        alert("Obrigado pelo contacto! Responderei em breve."); // Confirmação ao utilizador
        formContacto.reset(); // Limpa todos os campos do formulário
    });
} else {
    console.error("Formulário 'formContacto' não encontrado no DOM.");
}

/* =========================
   Menu Hamburger Mobile
========================= */
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão hamburger e o menu direito
    const hamburger = document.querySelector('.hamburger');
    const navRight = document.querySelector('.nav-right');

    // Verifica se todos os elementos foram encontrados
    if (!hamburger || !navRight) {
        console.error("Não foi possível encontrar hamburger ou nav-right!");
        return;
    }

    // Adiciona evento de click ao hamburger
    hamburger.addEventListener('click', () => {
        console.log("Hamburger clicado!");

        // Apenas abre/fecha o nav-right no mobile
        navRight.classList.toggle('active');

        // Log para depuração do estado do menu
        console.log("nav-right active:", navRight.classList.contains('active'));
    });
});
