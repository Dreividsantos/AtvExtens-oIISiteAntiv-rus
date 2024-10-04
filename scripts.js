// Mostra dica extra na seção de Dicas
const extraTipsBtn = document.getElementById('extraTipsBtn');
const extraTips = document.getElementById('extraTips');

extraTipsBtn.addEventListener('click', function() {
    extraTips.classList.toggle('hidden');
    extraTipsBtn.textContent = extraTips.classList.contains('hidden') ? 'Mostrar dica extra' : 'Ocultar dica extra';
});

// Função de submissão do formulário de contato
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        formMessage.textContent = 'Mensagem enviada com sucesso!';
        formMessage.classList.remove('hidden');
        contactForm.reset();
    } else {
        formMessage.textContent = 'Por favor, preencha todos os campos.';
        formMessage.classList.add('hidden');
    }
});

