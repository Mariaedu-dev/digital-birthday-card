function abrirCarta() {
  const envelope = document.querySelector(".envelope");
  envelope.classList.toggle("open");

  if (envelope.classList.contains("open")) {
    soltarConfete();
  }
}

function soltarConfete() {
  const container = document.querySelector(".confetti-container");

  for (let i = 0; i < 40; i++) {
    const confete = document.createElement("div");
    confete.classList.add("confetti");

    confete.style.left = Math.random() * 100 + "vw";
    confete.style.backgroundColor = coresAleatorias();
    confete.style.animationDuration = (Math.random() * 2 + 2) + "s";

    container.appendChild(confete);

    setTimeout(() => {
      confete.remove();
    }, 4000);
  }
}

function coresAleatorias() {
  const cores = ["#ff8fab", "#ffc2d1", "#f9bec7", "#ffe066", "#b5ead7"];
  return cores[Math.floor(Math.random() * cores.length)];
}
