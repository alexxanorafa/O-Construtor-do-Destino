document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos DOM
    const gameGrid = document.getElementById('game-grid');
    const tarotModal = document.getElementById('tarot-modal');
    const tarotCardName = document.getElementById('tarot-card-name');
    const tarotCardMeaning = document.getElementById('tarot-card-meaning');
    const closeTarotBtn = document.getElementById('close-tarot-btn');
    const startGameButton = document.getElementById('start-game-btn');
    const quizModal = document.getElementById('quiz-modal');
    const closeQuizBtn = document.getElementById('close-quiz-btn');
    const quizQuestion = document.getElementById('quiz-question');
    const option1 = document.getElementById('option-1');
    const option2 = document.getElementById('option-2');
    const option3 = document.getElementById('option-3');

    // Cartas de Tarô (substitua com as suas 78 cartas reais)
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

        // Questões do Quiz
    const quizQuestions = [
        { question: 'Qual novo começo está preparado para abraçar?', options: ['Uma nova jornada', 'Uma mudança de carreira', 'Explorar um novo relacionamento'], correctAnswer: 'Uma nova jornada' }, // O Louco
    { question: 'Como lida com as dificuldades na sua vida?', options: ['Ação imediata e foco', 'Pondero as opções com calma', 'Deixo que a situação se resolva por si mesma'], correctAnswer: 'Ação imediata e foco' }, // O Mago
    { question: 'Como costuma tomar decisões importantes?', options: ['Utilizo a lógica e sabedoria', 'Confio na intuição', 'Sigo as convenções e normas sociais'], correctAnswer: 'Confio na intuição' }, // A Sacerdotisa
    { question: 'O que mais ressoa consigo neste momento?', options: ['Cuidar dos outros', 'Criar algo novo', 'Buscar conforto e estabilidade'], correctAnswer: 'Criar algo novo' }, // A Imperatriz
    { question: 'Qual é a qualidade que mais valoriza numa pessoa?', options: ['Estrutura e disciplina', 'Liberdade e independência', 'Sabedoria e compaixão'], correctAnswer: 'Estrutura e disciplina' }, // O Imperador
    { question: 'Onde encontra maior consolo nos momentos difíceis?', options: ['Na minha fé', 'Em conversas com pessoas queridas', 'No autoconhecimento e meditação'], correctAnswer: 'Na minha fé' }, // O Papa
    { question: 'Como encara as escolhas na sua vida?', options: ['Com o coração aberto', 'Pesando os prós e contras', 'Seguindo o meu instinto'], correctAnswer: 'Com o coração aberto' }, // Os Enamorados
    { question: 'Quando enfrenta um desafio, o que faz?', options: ['Persigo a vitória com determinação', 'Faço uma pausa para reflectir', 'Procuro ajuda de outros'], correctAnswer: 'Persigo a vitória com determinação' }, // O Carro
    { question: 'Quando se depara com uma decisão difícil, o que procura?', options: ['Equilíbrio e justiça', 'Resolver o problema de maneira justa', 'Sigo o que o meu coração manda'], correctAnswer: 'Equilíbrio e justiça' }, // A Justiça
    { question: 'Sente-se mais confortável em qual situação?', options: ['Sozinho com os meus pensamentos', 'Em meio a uma multidão', 'Em actividades externas e dinâmicas'], correctAnswer: 'Sozinho com os meus pensamentos' }, // O Eremita
    { question: 'Como lida com mudanças na sua vida?', options: ['Aceito o fluxo da vida', 'Sinto-me apreensivo, mas sei que é necessário', 'Tento evitar mudanças ao máximo'], correctAnswer: 'Aceito o fluxo da vida' }, // A Roda da Fortuna
    { question: 'Como lida com as dificuldades emocionais?', options: ['Enfrento-as de cabeça erguida', 'Procuro forças interiores e paciência', 'Procuro apoio externo'], correctAnswer: 'Procuro forças interiores e paciência' }, // A Força
    { question: 'Em momentos de adversidade, o que faz?', options: ['Encaro com coragem', 'Reflito sobre o que posso aprender com a situação', 'Evito me envolver em problemas'], correctAnswer: 'Encaro com coragem' }, // O Enforcado
    { question: 'Qual dessas transformações está a viver?', options: ['Mudança radical de vida', 'Nova forma de ver o mundo', 'Uma limpeza do passado'], correctAnswer: 'Mudança radical de vida' }, // A Morte
    { question: 'Como busca equilíbrio na sua vida?', options: ['Buscando harmonia em todas as áreas', 'Com a prática da paciência', 'Ajusto-me conforme as situações'], correctAnswer: 'Buscando harmonia em todas as áreas' }, // A Temperança
    { question: 'Qual é a sua maior tentação?', options: ['O medo de perder o controlo', 'O apego a bens materiais', 'A ilusão do prazer momentâneo'], correctAnswer: 'O apego a bens materiais' }, // O Diabo
    { question: 'Como lida com situações inesperadas?', options: ['Encaro-as com resiliência', 'Procuro encontrar uma solução rapidamente', 'Procuro um novo caminho'], correctAnswer: 'Encaro-as com resiliência' }, // A Torre
    { question: 'Como lida com o desconhecido?', options: ['Com confiança na intuição', 'Acredito que a verdade sempre surgirá', 'Desconfio e questiono tudo'], correctAnswer: 'Com confiança na intuição' }, // A Lua
    { question: 'Quando se sente mais pleno?', options: ['Quando estou em harmonia com os outros', 'Quando conquisto algo significativo', 'Quando estou imerso no presente'], correctAnswer: 'Quando estou imerso no presente' }, // O Sol
    { question: 'Acredita em segundas oportunidades?', options: ['Sim, é uma oportunidade de aprendizagem', 'Não, o que se perdeu nunca se recupera', 'Depende da situação'], correctAnswer: 'Sim, é uma oportunidade de aprendizagem' }, // O Julgamento
    { question: 'O que sente que está finalmente a completar na sua vida?', options: ['Um ciclo de crescimento pessoal', 'Uma busca por estabilidade', 'Uma jornada de autodescoberta'], correctAnswer: 'Um ciclo de crescimento pessoal' }, // O Mundo

    // Arcanos Menores - Ouros
    { question: 'Como lida com a prosperidade?', options: ['Com gratidão e equilíbrio', 'Aproveito ao máximo cada momento', 'Procuro sempre mais'], correctAnswer: 'Com gratidão e equilíbrio' }, // Ás de Ouros
    { question: 'Como equilibra a sua vida?', options: ['Com flexibilidade', 'Com estrutura rígida', 'Tentando controlar tudo'], correctAnswer: 'Com flexibilidade' }, // Dois de Ouros
    { question: 'O que valoriza mais num grupo de trabalho?', options: ['Harmonia e colaboração', 'Trabalho árduo e dedicação', 'Criatividade e inovação'], correctAnswer: 'Harmonia e colaboração' }, // Três de Ouros
    { question: 'Quando sente que tem controlo sobre a sua vida?', options: ['Quando estou financeiramente estável', 'Quando alcanço os meus objectivos', 'Quando mantenho a minha paz interior'], correctAnswer: 'Quando estou financeiramente estável' }, // Quatro de Ouros
    { question: 'Como lida com perdas materiais?', options: ['Com aceitação e superação', 'Tentando recuperar o que perdi', 'Procurando alternativas mais seguras'], correctAnswer: 'Com aceitação e superação' }, // Cinco de Ouros
    { question: 'Como partilha o que tem?', options: ['Com generosidade', 'Com cautela', 'Com reservas'], correctAnswer: 'Com generosidade' }, // Seis de Ouros
    { question: 'Como vê os resultados do seu trabalho?', options: ['Acredito que a paciência é a chave', 'Aproveito quando chegam', 'Preocupo-me em manter o controlo'], correctAnswer: 'Acredito que a paciência é a chave' }, // Sete de Ouros
    { question: 'O que procura ao aprimorar-se?', options: ['Novas habilidades e competências', 'Autossuficiência', 'Reconhecimento dos outros'], correctAnswer: 'Novas habilidades e competências' }, // Oito de Ouros
    { question: 'O que significa para si uma vida bem-sucedida?', options: ['Independência financeira', 'Liberdade e segurança', 'Poder pessoal'], correctAnswer: 'Independência financeira' }, // Nove de Ouros
    { question: 'Como vê o legado que deixa?', options: ['Como uma herança financeira', 'Como algo que impacta as gerações futuras', 'Como uma contribuição espiritual'], correctAnswer: 'Como algo que impacta as gerações futuras' }, // Dez de Ouros
    { question: 'Qual é o seu principal foco na vida?', options: ['Oportunidades de crescimento pessoal', 'Estabilidade financeira', 'Reconhecimento social'], correctAnswer: 'Oportunidades de crescimento pessoal' }, // Pajem de Ouros
    { question: 'Como encara o seu trabalho?', options: ['Com responsabilidade e disciplina', 'Com dedicação e esforço', 'Com uma abordagem prática e metódica'], correctAnswer: 'Com responsabilidade e disciplina' }, // Cavaleiro de Ouros
    { question: 'O que mais valoriza nas pessoas ao seu redor?', options: ['Sustentabilidade e pragmatismo', 'Criatividade e inovação', 'Lealdade e compromisso'], correctAnswer: 'Sustentabilidade e pragmatismo' }, // Rainha de Ouros
    { question: 'Qual é o seu maior desejo em relação à riqueza?', options: ['Estabilidade e segurança', 'Poder e influência', 'Conforto e luxo'], correctAnswer: 'Estabilidade e segurança' }, // Rei de Ouros

    // Arcanos Menores - Espadas
    { question: 'Como lida com a clareza em sua vida?', options: ['Busco a verdade em todas as situações', 'Utilizo a razão para tomar decisões', 'Confio na intuição para esclarecer as situações'], correctAnswer: 'Busco a verdade em todas as situações' }, // Ás de Espadas
    { question: 'Quando se depara com um desafio, qual é a sua primeira reação?', options: ['Enfrento-o com lógica e raciocínio', 'Penso na melhor estratégia', 'Tento compreender todas as perspectivas antes de agir'], correctAnswer: 'Enfrento-o com lógica e raciocínio' }, // Dois de Espadas
    { question: 'Quando sente que está a alcançar a verdade?', options: ['Quando a situação se resolve de forma justa', 'Quando consigo comunicar de forma clara', 'Quando a razão prevalece sobre as emoções'], correctAnswer: 'Quando a razão prevalece sobre as emoções' }, // Três de Espadas
    { question: 'Como lida com a dor ou a tristeza?', options: ['Com coragem e determinação', 'Refletindo sobre o que aprendi', 'Com o apoio de outros'], correctAnswer: 'Com coragem e determinação' }, // Quatro de Espadas
    { question: 'Quando enfrenta um desafio mental, o que faz?', options: ['Procuro respostas claras e diretas', 'Analiso todas as possibilidades', 'Tento encontrar uma solução rápida e prática'], correctAnswer: 'Analiso todas as possibilidades' }, // Cinco de Espadas
    { question: 'O que mais aprecia em uma conversa?', options: ['A troca de ideias', 'A honestidade e clareza', 'A diplomacia e equilíbrio'], correctAnswer: 'A honestidade e clareza' }, // Seis de Espadas
    { question: 'Como reage perante um conflito?', options: ['Procuro uma solução rápida', 'Enfrento a situação de frente', 'Tento entender as razões dos outros'], correctAnswer: 'Tento entender as razões dos outros' }, // Sete de Espadas
    { question: 'Quando se vê à beira de um grande desafio mental, o que faz?', options: ['Procuro estratégias alternativas', 'Busco clareza antes de agir', 'Dou um passo atrás para refletir'], correctAnswer: 'Busco clareza antes de agir' }, // Oito de Espadas
    { question: 'Qual a sua reação quando se sente confuso ou preso?', options: ['Procuro uma forma de escapar da situação', 'Racionalizo para encontrar uma solução', 'Reflito profundamente antes de agir'], correctAnswer: 'Racionalizo para encontrar uma solução' }, // Nove de Espadas
    { question: 'Como lida com a verdade quando ela chega até si?', options: ['Com aceitação e clareza', 'Com franqueza e resolução', 'Com frustração e resistência'], correctAnswer: 'Com aceitação e clareza' }, // Dez de Espadas
    // Arcanos Menores - Copas
    { question: 'Quando um novo amor surge na sua vida, como lida com isso?', options: ['Com entusiasmo e abertura', 'Com cautela e reflexão', 'Com medo e receio'], correctAnswer: 'Com entusiasmo e abertura' }, // Ás de Copas
    { question: 'Como se sente quando partilha momentos importantes com os outros?', options: ['Com alegria e harmonia', 'Com prazer e gratidão', 'Com desconforto e insegurança'], correctAnswer: 'Com alegria e harmonia' }, // Dois de Copas
    { question: 'Como celebra as boas notícias ou vitórias?', options: ['Com amigos e família', 'Com momentos de introspecção', 'Com uma grande festa'], correctAnswer: 'Com amigos e família' }, // Três de Copas
    { question: 'Quando sente que está a perder algo importante, o que faz?', options: ['Procuro compreender as minhas emoções', 'Reflito sobre o que aprendi com a perda', 'Evito pensar na situação'], correctAnswer: 'Procuro compreender as minhas emoções' }, // Quatro de Copas
    { question: 'Quando se sente desiludido, como lida com isso?', options: ['Foco na recuperação emocional', 'Busco maneiras de seguir em frente', 'Procuro ajudar os outros a se sentirem melhor'], correctAnswer: 'Foco na recuperação emocional' }, // Cinco de Copas
    { question: 'Quando se lembra do passado, o que mais valoriza?', options: ['As memórias de infância', 'Os momentos de aprendizado', 'Os momentos de felicidade genuína'], correctAnswer: 'Os momentos de felicidade genuína' }, // Seis de Copas
    { question: 'Como lida com muitas opções na vida?', options: ['Avalio cuidadosamente cada uma', 'Deixo que a intuição me guie', 'Tento encontrar a opção mais segura'], correctAnswer: 'Avalio cuidadosamente cada uma' }, // Sete de Copas
    { question: 'Quando se vê à beira de uma mudança importante, o que faz?', options: ['Procuro novos começos com coragem', 'Reflito sobre o que deixo para trás', 'Procuro estabilidade antes de seguir em frente'], correctAnswer: 'Procuro novos começos com coragem' }, // Oito de Copas
    { question: 'Como se sente quando atinge um grande objetivo emocional?', options: ['Com contentamento e gratidão', 'Com um profundo sentido de realização', 'Com um sentimento de plenitude e paz'], correctAnswer: 'Com contentamento e gratidão' }, // Nove de Copas
    { question: 'O que mais deseja para a sua família?', options: ['Harmonia e felicidade', 'Segurança e estabilidade', 'Sucesso e reconhecimento'], correctAnswer: 'Harmonia e felicidade' }, // Dez de Copas
    { question: 'Quando lida com questões emocionais, o que mais valoriza?', options: ['A intuição', 'A compaixão', 'A razão'], correctAnswer: 'A intuição' }, // Pajem de Copas
    { question: 'Como vê o amor em sua vida?', options: ['Com idealismo e romantismo', 'Com paixão e dedicação', 'Com um senso de equilíbrio e harmonia'], correctAnswer: 'Com paixão e dedicação' }, // Cavaleiro de Copas
    { question: 'Como lida com os sentimentos intensos?', options: ['Com compreensão e empatia', 'Com reserva e introspecção', 'Com expressão e abertura'], correctAnswer: 'Com compreensão e empatia' }, // Rainha de Copas
    { question: 'Como se vê em termos emocionais?', options: ['Equilibrado e compassivo', 'Confiante e forte emocionalmente', 'Sensível e introspectivo'], correctAnswer: 'Equilibrado e compassivo' }, // Rei de Copas

    // Arcanos Menores - Paus
    { question: 'O que o inspira a dar o primeiro passo em direção aos seus objetivos?', options: ['A paixão e a motivação', 'A ideia de novas possibilidades', 'A necessidade de resultados imediatos'], correctAnswer: 'A paixão e a motivação' }, // Ás de Paus
    { question: 'Como se sente quando planeja um novo projeto?', options: ['Entusiasmado e cheio de ideias', 'Cauteloso e estratégico', 'Desconfiado e inseguro'], correctAnswer: 'Entusiasmado e cheio de ideias' }, // Dois de Paus
    { question: 'O que o motiva quando procura expandir seus horizontes?', options: ['O desejo de novas experiências', 'A busca pelo crescimento pessoal', 'O desejo de reconhecimento social'], correctAnswer: 'O desejo de novas experiências' }, // Três de Paus
    { question: 'Quando alcança um objetivo importante, como se sente?', options: ['Com grande alegria e celebração', 'Com uma sensação de dever cumprido', 'Com uma mistura de cansaço e satisfação'], correctAnswer: 'Com grande alegria e celebração' }, // Quatro de Paus
    { question: 'Como lida com a competição em sua vida?', options: ['Com determinação e confiança', 'Com cautela e respeito pelos outros', 'Com frustração e desejo de superar os outros'], correctAnswer: 'Com determinação e confiança' }, // Cinco de Paus
    { question: 'Como reage quando conquista algo importante?', options: ['Com orgulho e celebração', 'Com humildade e reflexão', 'Com um desejo de alcançar mais'], correctAnswer: 'Com orgulho e celebração' }, // Seis de Paus
    { question: 'Quando é confrontado com um desafio, como reage?', options: ['Com resiliência e perseverança', 'Com estratégia e inteligência', 'Com frustração e cansaço'], correctAnswer: 'Com resiliência e perseverança' }, // Sete de Paus
    { question: 'Quando as coisas estão a acontecer rapidamente, o que faz?', options: ['Aproveito a energia do momento', 'Procuro manter o controlo e a calma', 'Adapto-me rapidamente à situação'], correctAnswer: 'Aproveito a energia do momento' }, // Oito de Paus
    { question: 'Como lida com os desafios que surgem constantemente?', options: ['Com paciência e dedicação', 'Com confiança nas minhas habilidades', 'Com adaptação e flexibilidade'], correctAnswer: 'Com paciência e dedicação' }, // Nove de Paus
    { question: 'Quando sente que tem demasiado em mãos, o que faz?', options: ['Divido responsabilidades e descanso', 'Enfrento o desafio com força de vontade', 'Faço uma pausa e reorganizo as minhas prioridades'], correctAnswer: 'Faço uma pausa e reorganizo as minhas prioridades' }, // Dez de Paus
    { question: 'Quando se envolve em algo novo, o que procura?', options: ['Uma grande oportunidade', 'A possibilidade de crescimento pessoal', 'Uma aventura emocionante'], correctAnswer: 'Uma grande oportunidade' }, // Pajem de Paus
    { question: 'O que mais o motiva a agir?', options: ['A paixão pelo que faço', 'O desejo de alcançar algo grande', 'A necessidade de liderança e poder'], correctAnswer: 'A paixão pelo que faço' }, // Cavaleiro de Paus
    { question: 'Como lida com as suas responsabilidades?', options: ['Com coragem e compromisso', 'Com criatividade e inovação', 'Com pragmatismo e eficácia'], correctAnswer: 'Com coragem e compromisso' }, // Rainha de Paus
    { question: 'Quando se depara com uma nova ideia, o que faz?', options: ['Procuro aplicá-la de imediato', 'Exploro as possíveis consequências', 'Avalio o que outros pensam sobre ela'], correctAnswer: 'Procuro aplicá-la de imediato' }, // Rei de Paus

    const quizQuestions = [
    // Arcanos Maiores - Continuação
    { question: 'Como lida com as adversidades que surgem na sua vida?', options: ['Com coragem e perseverança', 'Tentando evitá-las ao máximo', 'Buscando conselhos em outros'], correctAnswer: 'Com coragem e perseverança' }, // O Carro
    { question: 'O que mais valoriza em um parceiro?', options: ['Lealdade e confiança', 'Ambição e motivação', 'Compaixão e compreensão'], correctAnswer: 'Lealdade e confiança' }, // Os Enamorados
    { question: 'Como prefere enfrentar um obstáculo?', options: ['Com uma atitude pragmática', 'Com uma análise profunda', 'Com uma atitude espontânea'], correctAnswer: 'Com uma análise profunda' }, // O Eremita
    { question: 'O que mais deseja para o seu futuro?', options: ['Sucesso profissional', 'Estabilidade emocional', 'Liberdade financeira'], correctAnswer: 'Estabilidade emocional' }, // A Imperatriz
    { question: 'Quando se sente sem direção, o que faz?', options: ['Procuro autoconhecimento', 'Confio na sorte', 'Sigo as orientações de outras pessoas'], correctAnswer: 'Procuro autoconhecimento' }, // O Louco
    { question: 'Quando precisa de fazer uma escolha difícil, qual é o seu foco?', options: ['Equilibrar os prós e contras', 'Seguir a minha intuição', 'Considerar todas as possibilidades'], correctAnswer: 'Seguir a minha intuição' }, // A Sacerdotisa
    { question: 'O que faz para encontrar equilíbrio em sua vida?', options: ['Meditação e introspecção', 'Busca por novos desafios', 'Mantém uma rotina fixa e organizada'], correctAnswer: 'Meditação e introspecção' }, // A Temperança
    { question: 'Quando lida com pessoas difíceis, como se comporta?', options: ['Com diplomacia e empatia', 'Com assertividade', 'Com distanciamento'], correctAnswer: 'Com diplomacia e empatia' }, // A Justiça
    { question: 'Como reage a mudanças inesperadas?', options: ['Com flexibilidade', 'Com resistência', 'Com adaptação rápida'], correctAnswer: 'Com flexibilidade' }, // A Roda da Fortuna
    { question: 'Quando está a passar por uma grande transformação, o que sente?', options: ['Alívio e renovação', 'Medo e incerteza', 'Expectativa e ansiedade'], correctAnswer: 'Alívio e renovação' }, // A Morte
    { question: 'Como lida com a frustração?', options: ['Com paciência e compreensão', 'Com ação imediata para resolver', 'Com uma pausa para refletir'], correctAnswer: 'Com paciência e compreensão' }, // O Enforcado
    { question: 'Como encara os seus próprios erros?', options: ['Com humildade', 'Com raiva e resistência', 'Com reflexão e aprendizado'], correctAnswer: 'Com humildade' }, // O Julgamento
    { question: 'O que mais lhe traz paz interior?', options: ['A harmonia emocional', 'A estabilidade financeira', 'A independência pessoal'], correctAnswer: 'A harmonia emocional' }, // O Sol
    { question: 'Qual é o seu maior desafio atualmente?', options: ['Manter a calma em situações difíceis', 'Encontrar o equilíbrio entre trabalho e vida pessoal', 'Lidar com as expectativas dos outros'], correctAnswer: 'Manter a calma em situações difíceis' }, // A Lua
    { question: 'Como encara o futuro?', options: ['Com otimismo', 'Com cautela', 'Com medo e insegurança'], correctAnswer: 'Com otimismo' }, // O Mundo

    // Arcanos Menores - Ouros - Continuação
    { question: 'Como lida com o dinheiro?', options: ['Com cautela e planejamento', 'Com generosidade e confiança', 'Com o desejo de acumular mais'], correctAnswer: 'Com cautela e planejamento' }, // Ás de Ouros
    { question: 'Quando se vê com dificuldades financeiras, como lida?', options: ['Tento reorganizar meu orçamento', 'Peço ajuda aos outros', 'Fico preocupado e ansioso'], correctAnswer: 'Tento reorganizar meu orçamento' }, // Dois de Ouros
    { question: 'Quando pensa em suas finanças, o que mais o preocupa?', options: ['Perder minha segurança financeira', 'Não alcançar meus objetivos materiais', 'Viver com conforto'], correctAnswer: 'Perder minha segurança financeira' }, // Três de Ouros
    { question: 'Quando consegue um grande sucesso financeiro, o que faz?', options: ['Reinveste no meu futuro', 'Desfruto do momento', 'Procuro novas oportunidades'], correctAnswer: 'Reinveste no meu futuro' }, // Quatro de Ouros
    { question: 'Como lida com a escassez financeira?', options: ['Tento ser o mais cauteloso possível', 'Busco maneiras de aumentar minha renda', 'Procurando cortar despesas ao máximo'], correctAnswer: 'Busco maneiras de aumentar minha renda' }, // Cinco de Ouros
    { question: 'Como define o seu conceito de riqueza?', options: ['Saber administrar bem os recursos', 'Viver com conforto e liberdade', 'Possuir bens materiais e propriedades'], correctAnswer: 'Viver com conforto e liberdade' }, // Seis de Ouros
    { question: 'Quando realiza um grande projeto, como se sente?', options: ['Satisfeito e orgulhoso', 'Aliviado por terminar', 'Com uma sensação de dever cumprido'], correctAnswer: 'Satisfeito e orgulhoso' }, // Sete de Ouros
    { question: 'Como vê a sua estabilidade financeira?', options: ['Como algo que precisa ser constantemente protegido', 'Como um reflexo do meu esforço e trabalho', 'Como algo que sempre posso melhorar'], correctAnswer: 'Como um reflexo do meu esforço e trabalho' }, // Oito de Ouros
    { question: 'Qual a importância do trabalho em sua vida?', options: ['É uma forma de garantir a minha independência financeira', 'É uma expressão de minha criatividade', 'É uma maneira de contribuir para a sociedade'], correctAnswer: 'É uma forma de garantir a minha independência financeira' }, // Nove de Ouros
    { question: 'Como lida com a herança ou legado familiar?', options: ['Como algo que precisa ser bem gerido', 'Com respeito e gratidão', 'Com uma responsabilidade que me pesa'], correctAnswer: 'Com respeito e gratidão' }, // Dez de Ouros

    // Arcanos Menores - Espadas - Continuação
    { question: 'Como reage quando confrontado com uma verdade difícil?', options: ['Com aceitação', 'Com raiva e resistência', 'Com reflexão e compreensão'], correctAnswer: 'Com aceitação' }, // Ás de Espadas
    { question: 'Quando toma uma decisão importante, o que mais pesa?', options: ['A lógica e os fatos', 'As minhas emoções e intuições', 'O que os outros esperam de mim'], correctAnswer: 'A lógica e os fatos' }, // Dois de Espadas
    { question: 'Como lida com conflitos mentais internos?', options: ['Com análise crítica', 'Com estratégias de enfrentamento', 'Com paciência para esperar uma solução'], correctAnswer: 'Com análise crítica' }, // Três de Espadas
    { question: 'Quando se sente mentalmente esgotado, o que faz?', options: ['Tiro um tempo para descansar', 'Procuro uma solução prática para o problema', 'Reflito sobre as lições aprendidas'], correctAnswer: 'Tiro um tempo para descansar' }, // Quatro de Espadas
    { question: 'Como lida com a desonestidade?', options: ['Com franqueza e transparência', 'Com desconfiança e cautela', 'Com empatia e compreensão'], correctAnswer: 'Com franqueza e transparência' }, // Cinco de Espadas
    { question: 'Como enfrenta uma situação difícil?', options: ['Com coragem e determinação', 'Com uma análise estratégica', 'Com prudência e cautela'], correctAnswer: 'Com coragem e determinação' }, // Seis de Espadas
    { question: 'Como reage ao confronto direto?', options: ['Com calma e controle', 'Com resistência e raiva', 'Com reflexão e busca de entendimento'], correctAnswer: 'Com calma e controle' }, // Sete de Espadas
    { question: 'Quando se sente preso em uma situação, o que faz?', options: ['Procuro uma saída criativa', 'Espero que as coisas melhorem sozinhas', 'Procuro entender a situação antes de agir'], correctAnswer: 'Procuro uma saída criativa' }, // Oito de Espadas
    { question: 'Como lida com uma perda mental ou emocional?', options: ['Com aceitação e reflexão', 'Com raiva e resistência', 'Com uma vontade de seguir em frente'], correctAnswer: 'Com aceitação e reflexão' }, // Nove de Espadas
    { question: 'Quando se sente desiludido, o que faz?', options: ['Procuro aprender com a experiência', 'Evito pensar sobre isso', 'Reflito sobre minhas falhas'], correctAnswer: 'Procuro aprender com a experiência' }, // Dez de Espadas

    // Arcanos Menores - Copas - Continuação
    { question: 'Como lida com seus sentimentos?', options: ['Com equilíbrio e compreensão', 'Com honestidade e transparência', 'Com prudência e reflexão'], correctAnswer: 'Com equilíbrio e compreensão' }, // Ás de Copas
    { question: 'Quando experimenta novas emoções, como se sente?', options: ['Curioso e aberto', 'Cauteloso e reflexivo', 'Exaltado e envolvido'], correctAnswer: 'Curioso e aberto' }, // Dois de Copas
    { question: 'Como lida com os altos e baixos emocionais?', options: ['Com resiliência e paciência', 'Com apego à estabilidade', 'Com cautela para não me perder'], correctAnswer: 'Com resiliência e paciência' }, // Três de Copas
    { question: 'Quando está em um ambiente feliz, como se sente?', options: ['Grato e relaxado', 'Com alegria contagiante', 'Com leveza e liberdade'], correctAnswer: 'Grato e relaxado' }, // Quatro de Copas
    { question: 'Como reage ao desapontamento emocional?', options: ['Com introspecção e reflexão', 'Com procura por novas conexões', 'Com uma reação impulsiva'], correctAnswer: 'Com introspecção e reflexão' }, // Cinco de Copas
    { question: 'O que mais valoriza nas relações pessoais?', options: ['Compreensão e apoio mútuo', 'Carinho e afetividade', 'Respeito e espaço pessoal'], correctAnswer: 'Compreensão e apoio mútuo' }, // Seis de Copas
    { question: 'Como lida com a solidão?', options: ['Com aceitação e autoconhecimento', 'Com uma busca por novas amizades', 'Com reflexão sobre a própria vida'], correctAnswer: 'Com aceitação e autoconhecimento' }, // Sete de Copas
    { question: 'Quando precisa se distanciar emocionalmente de algo, o que faz?', options: ['Tento manter a calma e a objetividade', 'Procuro uma solução prática', 'Deixo as emoções fluírem'], correctAnswer: 'Tento manter a calma e a objetividade' }, // Oito de Copas
    { question: 'O que significa para você alcançar a felicidade emocional?', options: ['Viver em harmonia comigo mesmo', 'Ser amado e admirado pelos outros', 'Sentir prazer nas coisas simples'], correctAnswer: 'Viver em harmonia comigo mesmo' }, // Nove de Copas
    { question: 'Quando encontra a paz emocional, como se sente?', options: ['Grato e em paz comigo mesmo', 'Calmo e pleno', 'Livre de preocupações'], correctAnswer: 'Grato e em paz comigo mesmo' }, // Dez de Copas

        // Mais questões podem ser adicionadas aqui
    ];

    let currentQuestionIndex = 0;  // Índice da questão atual

    // Inicializa o tabuleiro do jogo
    function initGameGrid() {
        gameGrid.innerHTML = '';  // Limpa o tabuleiro
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.classList.add('game-cell');
            cell.addEventListener('click', () => revealReward(i));
            gameGrid.appendChild(cell);
        }
    }

    // Revela uma recompensa ao clicar na célula do tabuleiro
    function revealReward(index) {
        const reward = Math.random() > 0.5 ? 'block' : 'tarot';
        const cell = gameGrid.children[index];

        if (reward === 'block') {
            cell.style.background = '#6a82fb';  // Cor para bloqueio
        } else {
            showRandomTarotCard();  // Mostra uma carta de tarô
        }
        cell.style.pointerEvents = 'none';  // Desabilita a célula após o clique
    }

    // Mostra uma carta de tarô aleatória
    function showRandomTarotCard() {
        const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
        tarotCardName.textContent = randomCard.name;
        tarotCardMeaning.textContent = randomCard.meaning;
        tarotModal.classList.remove('hidden');
    }
   function showQuizQuestion() {
        const question = quizQuestions[currentQuestionIndex];
        quizQuestion.textContent = question.question;
        option1.textContent = question.options[0];
        option2.textContent = question.options[1];
        option3.textContent = question.options[2];

        // Adiciona os eventos de clique para as opções
        option1.onclick = () => handleAnswer(option1.textContent);
        option2.onclick = () => handleAnswer(option2.textContent);
        option3.onclick = () => handleAnswer(option3.textContent);

        quizModal.classList.remove('hidden');
    }

    // Lida com a resposta ao quiz
    function handleAnswer(selectedAnswer) {
        const question = quizQuestions[currentQuestionIndex];

        // Verifica se a resposta está correta
        if (selectedAnswer === question.correctAnswer) {
            alert('Resposta correta!');
        } else {
            alert('Resposta incorreta!');
        }

        // Avança para a próxima pergunta
        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
            setTimeout(showQuizQuestion, 1000);  // Aguarda 1 segundo antes de mostrar a próxima pergunta
        } else {
            alert('Você terminou o quiz!');
            quizModal.classList.add('hidden');  // Fecha o modal do quiz
        }
    }
    // Fechar o modal de tarô
    closeTarotBtn.addEventListener('click', () => {
        tarotModal.classList.add('hidden');
    });

    // Fechar o modal de quiz
    closeQuizBtn.addEventListener('click', () => {
        quizModal.classList.add('hidden');
    });

    // Iniciar o jogo
    startGameButton.addEventListener('click', initGameGrid);

    // Inicializa o tabuleiro
    initGameGrid();

    // Mostrar o quiz após 5 segundos (exemplo)
    setTimeout(showQuizQuestion, 5000); // Exemplo: mostra o quiz após 5 segundos
});
