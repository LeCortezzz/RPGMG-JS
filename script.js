
document.getElementById("musicForm").addEventListener("submit", (e) => {e.preventDefault();

    const race = document.getElementById("race").value;
    const classe = document.getElementById("classe").value;
    const alignment = document.getElementById("alignment").value;
    
    const result = document.getElementById("result");
    const text = `



    <h2>Você escolheu: </h2>
    <ul>
        <li>Raça: ${race}</li>
        <li>Classe: ${classe}</li>
        <li>Alinhamento: ${alignment}</li>
    </ul>
    




`;

        result.style.display = "block";
        result.innerHTML = "";

        let i = 0;

        function type() {
            if (i < text.length) {
                result.innerHTML += text[i];
                i++;
                setTimeout(type , 25);

            }
        }
        type();
});