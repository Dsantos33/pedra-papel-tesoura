  const botoes = document.querySelectorAll(".escolhaJogador");

  botoes.forEach(botao => {
    botao.addEventListener("click", function(evento) {
      evento.preventDefault();

      const escolhaDoJogador = this.textContent;

      const numeroAleatorio = Math.floor(Math.random() * 3);
      let escolhaMaquina = "";

      if (numeroAleatorio === 0) {
        escolhaMaquina = "pedra";
      } else if (numeroAleatorio === 1) {
        escolhaMaquina = "papel";
      } else {
        escolhaMaquina = "tesoura";
      }
      const imagem = document.getElementById('minhaImagem');
      const resultado = document.getElementById('resultado');

      if (escolhaDoJogador === escolhaMaquina) {
        imagem.src = "imgs/empate.jpg";
        resultado.innerText = "Empatou!";
      } else if (
        (escolhaDoJogador === "pedra" && escolhaMaquina === "tesoura") ||
        (escolhaDoJogador === "papel" && escolhaMaquina === "pedra") ||
        (escolhaDoJogador === "tesoura" && escolhaMaquina === "papel")
      ) {
        imagem.src = `imgs/${escolhaMaquina}.jpg`; // imagem do que a máquina escolheu
        resultado.innerText = `A máquina escolheu ${escolhaMaquina}, você ganhou!`;
      } else {
        imagem.src = `imgs/${escolhaMaquina}.jpg`;
        resultado.innerText = `A máquina escolheu ${escolhaMaquina}, você perdeu!`;
      }
    });
  });