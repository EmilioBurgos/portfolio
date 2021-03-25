document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

function abrirModal() {
    document.getElementById("modal").style.top = "0";
}

function FecharModal() {
    document.getElementById("modal").style.top = "-100%";
}

function abrirModal2() {
    document.getElementById("modal2").style.top = "0";
}

function FecharModal2() {
    document.getElementById("modal2").style.top = "-100%";
}

window.load = slide(1);

var bgNumber = 1;

function slide(n) {
    var allBgs = 13;
    document.getElementById("modelos").style.backgroundImage = "url('imagens/" + n + ".jpg')";
}

function anterior() {
    if (bgNumber > 1) {
        bgNumber--;
        slide(bgNumber);
    }
}

function proximo() {
    if (bgNumber < 13) {
        bgNumber++;
        slide(bgNumber);
    }
}