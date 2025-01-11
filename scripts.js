document.addEventListener('DOMContentLoaded', () => {
    const gameGrid = document.getElementById('game-grid');
    const tarotModal = document.getElementById('tarot-modal');
    const tarotCardName = document.getElementById('tarot-card-name');
    const tarotCardMeaning = document.getElementById('tarot-card-meaning');
    const closeTarotBtn = document.getElementById('close-tarot-btn');
    const startGameButton = document.getElementById('start-game-btn');
  
    const tarotCards = [
        // Arcanos Maiores
        { name: 'O Louco', meaning: 'Novos começos, espontaneidade, liberdade.' },
        { name: 'O Mago', meaning: 'Habilidade, concentração, ação.' },
        { name: 'A Sacerdotisa', meaning: 'Sabedoria, intuição, mistério.' },
        { name: 'A Imperatriz', meaning: 'Criatividade, abundância, fertilidade.' },
        { name: 'O Imperador', meaning: 'Estrutura, estabilidade, autoridade.' },
        { name: 'O Papa', meaning: 'Tradição, espiritualidade, orientação.' },
        { name: 'Os Enamorados', meaning: 'Amor, escolhas, harmonia.' },
        { name: 'O Carro', meaning: 'Determinação, sucesso, controle.' },
        { name: 'A Justiça', meaning: 'Verdade, justiça, equilíbrio.' },
        { name: 'O Eremita', meaning: 'Introspecção, solidão, busca espiritual.' },
        { name: 'A Roda da Fortuna', meaning: 'Ciclo, mudança, destino.' },
        { name: 'A Força', meaning: 'Coragem, paciência, compaixão.' },
        { name: 'O Enforcado', meaning: 'Sacrifício, nova perspectiva, pausa.' },
        { name: 'A Morte', meaning: 'Transformação, renascimento, mudança.' },
        { name: 'A Temperança', meaning: 'Moderação, harmonia, equilíbrio.' },
        { name: 'O Diabo', meaning: 'Apego, ilusão, tentação.' },
        { name: 'A Torre', meaning: 'Mudança repentina, caos, revelação.' },
        { name: 'A Estrela', meaning: 'Esperança, inspiração, renovação.' },
        { name: 'A Lua', meaning: 'Ilusões, intuição, mistério.' },
        { name: 'O Sol', meaning: 'Alegria, sucesso, vitalidade.' },
        { name: 'O Julgamento', meaning: 'Renovação, autoconhecimento, julgamento.' },
        { name: 'O Mundo', meaning: 'Realização, integração, plenitude.' },
        // Arcanos Menores - Ouros
        { name: 'Ás de Ouros', meaning: 'Oportunidade, prosperidade, abundância.' },
        { name: 'Dois de Ouros', meaning: 'Equilíbrio, adaptabilidade, mudança.' },
        { name: 'Três de Ouros', meaning: 'Trabalho em equipe, aprendizado, crescimento.' },
        { name: 'Quatro de Ouros', meaning: 'Estabilidade, controle, possessividade.' },
        { name: 'Cinco de Ouros', meaning: 'Perda, dificuldade, superação.' },
        { name: 'Seis de Ouros', meaning: 'Generosidade, caridade, equilíbrio financeiro.' },
        { name: 'Sete de Ouros', meaning: 'Planejamento, paciência, colheita.' },
        { name: 'Oito de Ouros', meaning: 'Dedicação, aprendizado, aperfeiçoamento.' },
        { name: 'Nove de Ouros', meaning: 'Realização, independência, luxo.' },
        { name: 'Dez de Ouros', meaning: 'Herança, legado, estabilidade familiar.' },
        { name: 'Pajem de Ouros', meaning: 'Novas ideias, curiosidade, potencial.' },
        { name: 'Cavaleiro de Ouros', meaning: 'Responsabilidade, eficiência, trabalho árduo.' },
        { name: 'Rainha de Ouros', meaning: 'Nutrição, prosperidade, praticidade.' },
        { name: 'Rei de Ouros', meaning: 'Riqueza, liderança, segurança.' },
        // Arcanos Menores - Espadas
        { name: 'Ás de Espadas', meaning: 'Clareza, verdade, visão.' },
        { name: 'Dois de Espadas', meaning: 'Decisão difícil, impasse, escolhas.' },
        { name: 'Três de Espadas', meaning: 'Dor, separação, mágoa.' },
        { name: 'Quatro de Espadas', meaning: 'Descanso, recuperação, reflexão.' },
        { name: 'Cinco de Espadas', meaning: 'Conflito, perda, aprendizado.' },
        { name: 'Seis de Espadas', meaning: 'Transição, mudança, recuperação.' },
        { name: 'Sete de Espadas', meaning: 'Engano, estratégia, evasão.' },
        { name: 'Oito de Espadas', meaning: 'Restrição, medo, dúvida.' },
        { name: 'Nove de Espadas', meaning: 'Ansiedade, pesadelos, preocupação.' },
        { name: 'Dez de Espadas', meaning: 'Fim, traição, transformação.' },
        { name: 'Pajem de Espadas', meaning: 'Curiosidade, vigilância, descoberta.' },
        { name: 'Cavaleiro de Espadas', meaning: 'Determinação, ação, velocidade.' },
        { name: 'Rainha de Espadas', meaning: 'Independência, verdade, percepção.' },
        { name: 'Rei de Espadas', meaning: 'Racionalidade, lógica, autoridade.' },
        // Arcanos Menores - Copas
        { name: 'Ás de Copas', meaning: 'Novos começos emocionais, amor, criatividade.' },
        { name: 'Dois de Copas', meaning: 'Parceria, união, harmonia.' },
        { name: 'Três de Copas', meaning: 'Celebrar, amizade, criatividade.' },
        { name: 'Quatro de Copas', meaning: 'Desinteresse, introspecção, reeavaliação.' },
        { name: 'Cinco de Copas', meaning: 'Decepção, perda, aprendizado.' },
        { name: 'Seis de Copas', meaning: 'Nostalgia, memórias, inocência.' },
        { name: 'Sete de Copas', meaning: 'Ilusões, escolhas, oportunidades.' },
        { name: 'Oito de Copas', meaning: 'Abandono, busca, mudança.' },
        { name: 'Nove de Copas', meaning: 'Realização, contentamento, plenitude.' },
        { name: 'Dez de Copas', meaning: 'Felicidade, harmonia, realização familiar.' },
        { name: 'Pajem de Copas', meaning: 'Novas emoções, intuição, curiosidade.' },
        { name: 'Cavaleiro de Copas', meaning: 'Romance, charme, imaginação.' },
        { name: 'Rainha de Copas', meaning: 'Compaixão, empatia, intuição.' },
        { name: 'Rei de Copas', meaning: 'Controle emocional, liderança, equilíbrio.' },
        // Arcanos Menores - Paus
        { name: 'Ás de Paus', meaning: 'Inspiração, potencial, novas ideias.' },
        { name: 'Dois de Paus', meaning: 'Planejamento, decisão, progresso.' },
        { name: 'Três de Paus', meaning: 'Exploração, expansão, visão.' },
        { name: 'Quatro de Paus', meaning: 'Celebração, lar, sucesso.' },
        { name: 'Cinco de Paus', meaning: 'Conflito, competição, luta.' },
        { name: 'Seis de Paus', meaning: 'Vitória, reconhecimento, sucesso.' },
        { name: 'Sete de Paus', meaning: 'Desafios, perseverança, resistência.' },
        { name: 'Oito de Paus', meaning: 'Progresso rápido, movimento, comunicação.' },
        { name: 'Nove de Paus', meaning: 'Resiliência, força, proteção.' },
        { name: 'Dez de Paus', meaning: 'Sobrecarga, responsabilidade, esforço.' },
        { name: 'Pajem de Paus', meaning: 'Exploração, entusiasmo, descoberta.' },
        { name: 'Cavaleiro de Paus', meaning: 'Energia, paixão, ação.' },
        { name: 'Rainha de Paus', meaning: 'Coragem, criatividade, determinação.' },
        { name: 'Rei de Paus', meaning: 'Visão, liderança, inspiração.' },
      ];
  
    function initGameGrid() {
      gameGrid.innerHTML = '';
      for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('game-cell');
        cell.addEventListener('click', () => revealReward(i));
        gameGrid.appendChild(cell);
      }
    }
  
    function revealReward(index) {
      const reward = Math.random() > 0.5 ? 'block' : 'tarot';
      const cell = gameGrid.children[index];
  
      if (reward === 'block') {
        cell.style.background = '#6a82fb';
      } else {
        showRandomTarotCard();
      }
      cell.style.pointerEvents = 'none';
    }
  
    function showRandomTarotCard() {
      const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
      tarotCardName.textContent = randomCard.name;
      tarotCardMeaning.textContent = randomCard.meaning;
      tarotModal.classList.remove('hidden');
    }
  
    closeTarotBtn.addEventListener('click', () => {
      tarotModal.classList.add('hidden');
    });
  
    startGameButton.addEventListener('click', initGameGrid);
  
    initGameGrid();
  });
  