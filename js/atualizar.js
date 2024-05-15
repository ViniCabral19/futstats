function somarGol(id) {
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
    const jogador = jogadores.find(jogador => jogador.id === parseInt(id));
    if (jogador && jogador.gols > 0) {
        jogador.gols -= 1;
        localStorage.setItem("jogadores", JSON.stringify(jogadores));
        window.location.reload();
    }
}


function subtrairGol(id) {
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
    const jogador = jogadores.find(jogador => jogador.id === parseInt(id));
    if (jogador) {
        jogador.gols += 1;
        localStorage.setItem("jogadores", JSON.stringify(jogadores));
        window.location.reload();
    }
}

function somarAssistencia(id) {
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
    const jogador = jogadores.find(jogador => jogador.id === parseInt(id));
    if (jogador && jogador.assistencias > 0) {
        jogador.assistencias -= 1;
        localStorage.setItem("jogadores", JSON.stringify(jogadores));
        window.location.reload();
    }
}

function subtrairAssistencia(id) {
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
const jogador = jogadores.find(jogador => jogador.id === parseInt(id));
if (jogador) {
    jogador.assistencias += 1;
    localStorage.setItem("jogadores", JSON.stringify(jogadores));
    window.location.reload();
    }
}