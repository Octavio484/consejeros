document.querySelectorAll(".meta-card").forEach((card) => {
  const button = card.querySelector(".meta-toggle");
  const actions = card.querySelector(".meta-actions");

  button.addEventListener("click", () => {
    const isHidden = actions.classList.contains("hidden");

    actions.classList.toggle("hidden");
    card.classList.toggle("is-open");

    button.textContent = isHidden ? "▲ Ocultar acciones" : "▼ Ver acciones";
  });
});

// Si después agregas URL real en data-photo, este bloque la coloca automáticamente.
document.querySelectorAll(".counselor-photo").forEach((photoBox) => {
  const url = photoBox.dataset.photo?.trim();

  if (url) {
    photoBox.innerHTML = `<img src="${url}" alt="" style="width:100%;height:100%;object-fit:cover;display:block;">`;
  }
});
