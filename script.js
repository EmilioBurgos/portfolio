document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

function abrirModal() {
    document.getElementById("modal").style.top = "0";
}
function FecharModal() {
    document.getElementById("modal").style.top = "-100%";
}
