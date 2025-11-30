// Botão Experimente Grátis
document.querySelector('#home button').addEventListener('click', function() {
    alert('Aula experimental agendada! Te aguardamos.');
});

// Botões Assinar
document.querySelectorAll('#planos button').forEach(button => {
    button.addEventListener('click', function() {
        const plano = this.closest('.card').querySelector('h3').textContent;
        alert(`Plano ${plano} escolhido!`);
    });
});

// Formulário
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada!');
    this.reset();
});

// Navegação
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});