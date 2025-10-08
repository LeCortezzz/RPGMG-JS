
document.getElementById("musicForm").addEventListener("submit", (e) => {e.preventDefault();

    const race = document.getElementById("race").value;
    const classe = document.getElementById("classe").value;
    const alignment = document.getElementById("alignment").value;
    
    const result = document.getElementById("result");

    result.innerHTML = `


    <h2>Você escolheu: </h2>
    <ul>
        <li>Raça: ${race}</li>
        <li>Classe: ${classe}</li>
        <li>Alinhamento: ${alignment}</li>
    </ul>
    




`;
});