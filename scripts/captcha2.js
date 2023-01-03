const yesCook = document.getElementById("noButYes");
const noCook = document.getElementById("yesButNo");
const container = document.getElementById("yesorno");
const btnImpo = document.getElementById("btnImp2");

yesCook.addEventListener("click", () => {
    container.style.left = "200%";
    container.style.transition = "2s";
    container.style.transform = "scale(0.1)";
    container.style.opacity = "0";
    btnImpo.disabled = false;
    btnImpo.textContent = "Valider la demande";
})

noCook.addEventListener("click", () =>{
    location.href="../index.html"
})

