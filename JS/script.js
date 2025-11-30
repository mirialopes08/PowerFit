//btnbasico
document.getElementById("btnbasico").onclick = function () {
    document.getElementById("modalBasico").style.display = "block";
};
document.querySelector("#modalBasico .close").onclick = function () {
    document.getElementById("modalBasico").style.display = "none";
};
window.onclick = function (event) {
    let modal = document.getElementById("modalBasico");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

//btnpremium
document.getElementById("btnpremium").onclick = function () {
    document.getElementById("modalpremium").style.display = "block";
};
document.querySelector("#modalpremium .close").onclick = function () {
    document.getElementById("modalpremium").style.display = "none";
};
window.onclick = function (event) {
    let modal = document.getElementById("modalpremium");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

//btnelite
document.getElementById("btnelite").onclick = function () {
    document.getElementById("modalelite").style.display = "block";
};
document.querySelector("#modalelite .close").onclick = function () {
    document.getElementById("modalelite").style.display = "none";
};
window.onclick = function (event) {
    let modal = document.getElementById("modalelite");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Formulário
document.getElementById("submit").onclick = function () {
    document.getElementById("modalsubmit").style.display = "block";
};
document.querySelector("#modalsubmit .close").onclick = function () {
    document.getElementById("modalsubmit").style.display = "none";
};
window.onclick = function (event) {
    let modal = document.getElementById("modalsubmit");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Navegação
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});