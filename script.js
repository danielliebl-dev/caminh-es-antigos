document.addEventListener('DOMContentLoaded', () => {
    // Captura todos os botões de curiosidade do site
    const botoes = document.querySelectorAll('.btn-curiosidade');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            // Pega o número de identificação do caminhão
            const idCaminhao = botao.getAttribute('data-id');
            // Localiza o parágrafo de curiosidade correspondente
            const caixaCuriosidade = document.getElementById(`curiosidade-${idCaminhao}`);

            if (caixaCuriosidade) {
                // Alterna a classe 'escondido' (mostra se estiver oculto, oculta se estiver visível)
                caixaCuriosidade.classList.toggle('escondido');

                // Atualiza o texto do botão para o usuário saber o que vai acontecer
                if (caixaCuriosidade.classList.contains('escondido')) {
                    botao.textContent = 'Ver Curiosidade';
                } else {
                    botao.textContent = 'Ocultar Curiosidade';
                }
            }
        });
    });
});
