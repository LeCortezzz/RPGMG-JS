document.getElementById("musicForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const race = document.getElementById("race").value;
  const classe = document.getElementById("classe").value;
  const alignment = document.getElementById("alignment").value;
  const modal = document.getElementById("resultModal");
  const closeModal = document.getElementById("closeModal");
  const result = document.getElementById("result");

  // Monta o resultado dentro do modal
  modal.querySelector("h2").innerHTML = `
    Você escolheu:<br><br>
    Raça: <br>${race}<br>
    Classe: ${classe}<br>
    Alinhamento: ${alignment}
  `;

  // Exibe o modal
  modal.style.display = 'flex';

  // Fecha o modal ao clicar no botão "Voltar"
  closeModal.addEventListener("click", () => {
    modal.style.display = 'none';
  });
});