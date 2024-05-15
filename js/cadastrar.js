document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#botao-cadastrar").addEventListener("click", (event) => {
        event.preventDefault(); // Impede o comportamento padrão do botão

        // Pegar os valores dos inputs
        const nome = document.querySelector("#nome").value;
        const foto = document.querySelector("#foto").value;
        const time = document.querySelector("#time").value;
        const nota = parseInt(document.querySelector("#nota").value);
        const gols = parseInt(document.querySelector("#gols").value);
        const assistencias = parseInt(document.querySelector("#assistencias").value);

        // Criar um objeto chamado jogador com esses valores
        const jogador = {
            id: Date.now(), // Cria um ID único baseado no timestamp atual
            nome,
            foto,
            time,
            nota: isNaN(nota) ? 0 : nota,
            gols: isNaN(gols) ? 0 : gols, // Se os gols não forem um número, define como 0
            assistencias: isNaN(assistencias) ? 0 : assistencias // Se as assistências não forem um número, define como 0
        };

        // Recuperar o array de jogadores do localStorage (ou criar um novo array se estiver vazio)
        const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

        // Adicionar o novo jogador ao array
        jogadores.push(jogador);

        // Salvar o array atualizado no localStorage usando a chave "jogadores"
        localStorage.setItem("jogadores", JSON.stringify(jogadores));

        // Redirecionar o usuário para a página inicial
        window.location.href = "index.html";
    });
});