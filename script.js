// Modais
document.getElementById("btnbasico").onclick = () => document.getElementById("modalBasico").style.display = "block";
document.getElementById("btnpremium").onclick = () => document.getElementById("modalpremium").style.display = "block";
document.getElementById("btnelite").onclick = () => document.getElementById("modalelite").style.display = "block";

// Fechar modais
document.querySelectorAll(".close").forEach(close => {
    close.onclick = () => close.closest(".modal").style.display = "none";
});
window.onclick = (e) => e.target.classList.contains("modal") ? e.target.style.display = "none" : null;

// Navegação
document.querySelectorAll('nav a').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    };
});

// Validação SIMPLES
document.getElementById("submit").onclick = (e) => {
    e.preventDefault();
    
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const celular = document.getElementById("celular");
    
    // Nome: pelo menos 2 palavras
    if (nome.value.trim().split(" ").length < 2) {
        alert("Digite nome e sobrenome");
        nome.value = "";
        nome.focus();
        return;
    }
    
    // Email: só domínios permitidos
    if (!/@(gmail|hotmail|outlook|yahoo|icloud)\.com$/.test(email.value)) {
        alert("Email inválido. Use: gmail.com, hotmail.com, outlook.com, yahoo.com ou icloud.com");
        email.value = "";
        email.focus();
        return;
    }
    
    // Celular: só números, 11 dígitos, começa com 9 após DDD
    const celNum = celular.value.replace(/\D/g, '');
    
    if (celNum.length !== 11 || !/^[1-9]{2}9/.test(celNum)) {
        alert("Celular: 11 números, DDD + 9 dígitos, começa com 9\nEx: 54999999999");
        celular.value = "";
        celular.focus();
        return;
    }
    
    // Formata e envia
    celular.value = celNum.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
    document.getElementById("modalsubmit").style.display = "block";
    document.getElementById("formContato").reset();
};

// Fechar modal do formulário
document.querySelector("#modalsubmit .close").onclick = () => {
    document.getElementById("modalsubmit").style.display = "none";
};
