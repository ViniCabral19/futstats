function apagar(id) {
    let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
    jogadores = jogadores.filter(jogador => jogador.id !== parseInt(id));
    localStorage.setItem("jogadores", JSON.stringify(jogadores));
    window.location.reload();
}