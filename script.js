/* =========================
   Formulário de Contacto
========================= */
// Seleciona o formulário pelo ID "formContacto"
const formContacto = document.getElementById('formContacto');

if (formContacto) { // Verifica se o formulário existe no DOM
    // Adiciona um listener para o evento "submit" do formulário
    formContacto.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que a página recarregue ao submeter o formulário

        // Envia os dados do formulário usando EmailJS
        // Parâmetros:
        // 1. 'service_br404kd' -> ID do serviço que configuraste no EmailJS
        // 2. 'YOUR_TEMPLATE_ID' -> ID do template que configuraste no EmailJS (substitui pelo teu)
        // 3. 'this' -> refere-se ao formulário atual e permite enviar todos os campos automaticamente
        emailjs.sendForm('service_br404kd', 'template_w2az56o', this)
        .then(function() { // Se o envio for bem-sucedido
            alert("Obrigado pelo contacto! Responderei em breve."); // Mensagem de confirmação para o utilizador
            formContacto.reset(); // Limpa todos os campos do formulário
        }, function(error) { // Se ocorrer algum erro durante o envio
            alert("Ops! Algo correu mal. Tenta novamente."); // Alerta o utilizador
            console.error('Erro EmailJS:', error); // Mostra detalhes do erro no console para debugging
        });
    });
} else { // Caso o formulário não exista no DOM
    console.error("Formulário 'formContacto' não encontrado no DOM."); // Log de erro no console
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
