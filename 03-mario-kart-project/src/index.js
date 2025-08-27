const readline = require('readline');

const questionPlayer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Criamos uma pequena função para simplificar as perguntas
function questionPlayers(questionPlayers) {
    return new Promise(responsePlayers => {
        questionPlayer.question(questionPlayers, responsePlayers);
    });
}

// Criando os jogadores 1 e 2 e definindo suas características
const players = {

    mario: {
        idPlayer: 1,
        name: "Mario",
        speed: 4,
        mobility: 3,
        power: 3,
        point: 0
    },

    luigi: {
        idPlayer: 2,
        name: "Luigi",
        speed: 3,
        mobility: 4,
        power: 4,
        point: 0
    },

    peach: {
        idPlayer: 3,
        name: "Peach",
        speed: 3,
        mobility: 4,
        power: 2,
        point: 0
    },

    yoshi: {
        idPlayer: 4,
        name: "Yoshi",
        speed: 2,
        mobility: 4,
        power: 3,
        point: 0
    },

    donkeyKong: {
        idPlayer: 5,
        name: "Donkey Kong",
        speed: 2,
        mobility: 2,
        power: 5,
        point: 0
    },

    bowser: {
        idPlayer: 6,
        name: "Bowser",
        speed: 5,
        mobility: 2,
        power: 5,
        point: 0
    }

};

// Função para rolar o dado de forma assíncrona, retornando o resultado sem esperar a execução de outras funções
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    
    console.log(`${characterName} 🎲 Rolou um dado de ${block} ${diceResult} + ${attribute} = ${
        diceResult + attribute 
    }`);
    
}

// Função para sortear um bloco de forma assíncrona
async function getRandomBlock(){
    
    let random = Math.random()
    let result

    //condicional para o tipo de bloco    
    switch (true) {

        case random < 0.33:
            result = "RETA";
            break;
            
        case random < 0.66:
            result = "CURVA";            
            break;

        default:
            result = "CONFRONTO";
            break;
    }
    return result    
}

// Função para iniciar a corrida
async function playRaceEngine(character1, character2) {

    // Comando de repetição de até 5 rodadas
    for(let round = 1; round <= 5; round++) {

        console.log(`🏁 Rodada ${round} se inicia`);
        
        //Sortear um bloco
        let block = await getRandomBlock();
        console.log(`O bloco sorteado é: ${block}`);

        // Rolar os dados 
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // Teste de Habilidades
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "RETA") {
            
            totalTestSkill1 = character1.speed + diceResult1;
            totalTestSkill2 = character2.speed + diceResult2;

            await logRollResult(
                character1.name, 
                "velocidade", 
                diceResult1,
                character1.speed
            );

            await logRollResult(
                character2.name, 
                "velocidade", 
                diceResult2,
                character2.speed
            );

            if (totalTestSkill1 === totalTestSkill2) {
                console.log("A rodada terminou em empate!");
            }

        } else if (block === "CURVA") {

            totalTestSkill1 = character1.mobility + diceResult1;
            totalTestSkill2 = character2.mobility + diceResult2;

            await logRollResult(
                character1.name, 
                "manobrabilidade", 
                diceResult1,
                character1.mobility
            );
            
            await logRollResult(
                character2.name, 
                "manobrabilidade", 
                diceResult2,
                character2.mobility
            );

            if (totalTestSkill1 === totalTestSkill2) {
                console.log("A rodada terminou em empate!");
            }

        } else if (block === "CONFRONTO") {

            let powerResult1 = character1.power + diceResult1;
            let powerResult2 = character2.power + diceResult2;

            console.log(`${character1.name} confrontou ${character2.name} 🥊 !`);
            
            await logRollResult(
            
                character1.name,
                "poder",
                diceResult1,
                character1.power
            
            );

            await logRollResult(
            
                character2.name,
                "poder",
                diceResult2,
                character2.power
            
            );

            // Sorteia um número para decidir o que vai acontecer
            let randomEvent = Math.random();

            if (randomEvent < 0.10) { //Chance de ser BOMBA
                
                // Se o evento é BOMBA, sorteia quem será o alvo
                if (Math.random() < 0.5) {
                    console.log(`\n${character2.name} jogou uma 💣 BOMBA em: ${character1.name} foi atingido(a) e perdeu 2 pontos!\n`);
                    character1.point = Math.max(0, character1.point - 2);
                } else {
                    console.log(`\n$${character1.name} jogou uma 💣 BOMBA em: ${character2.name} foi atingido(a) e perdeu 2 pontos!\n`);
                    character2.point = Math.max(0, character2.point - 2);
                }

            } else if (randomEvent < 0.30) { //Chance de ser CASCO

                // Se o evento é CASCO, sorteia quem será o alvo
                if (Math.random() < 0.5) {
                    console.log(`\n${character2.name} jogou um 🐢 CASCO em: ${character1.name} foi atingido(a) e perdeu 1 pontos!\n`);
                    character1.point = Math.max(0, character1.point - 1);
                } else {
                    console.log(`\n${character1.name} jogou um 🐢 CASCO em: ${character2.name} foi atingido(a) e perdeu 1 pontos!\n`);
                    character2.point = Math.max(0, character2.point - 1);
                }
                
            } else { // Chance de NADA acontecer
                console.log("\nNenhum item foi jogado nos corredores nesta rodada.\n");
            }

            // IFs ternarios
            powerResult1 > powerResult2 ? 
                // SE O JOGADOR 1 VENCEU...
                (
                    console.log(`${character1.name} venceu o confronto!`),

                    // Sorteia o turbo para o vencedor (jogador 1) - usamos && como um if simples
                    Math.random() < 0.5 && (console.log(`${character1.name} usou o turbo e ganhou 1 ponto!`), character1.point++)
                ) 
            : powerResult2 > powerResult1 ?
                // SENÃO, SE O JOGADOR 2 VENCEU...
                (
                    console.log(`${character2.name} venceu o confronto!`),

                    // Sorteia o turbo para o vencedor (jogador 2)
                    Math.random() < 0.5 && (console.log(`${character2.name} usou o turbo e ganhou 1 ponto!`), character2.point++)
                )
            :
                // SENÃO (EMPATE)...
                console.log("O confronto terminou em empate! Nenhum ponto foi alterado.");
            
        } 
        
        // Verifica quem ganhou a rodada e atribui o ponto
        if (totalTestSkill1 > totalTestSkill2) {
            
            console.log(`${character1.name} venceu a rodada ! e marcou um ponto !`);
            character1.point ++;

        } else if (totalTestSkill1 < totalTestSkill2) {

            console.log(`${character2.name} venceu a rodada ! e marcou um ponto !`);
            character2.point ++;

        }

        console.log(`\n--------------------------------------------------------------\n`);

    }

}

// Função para declarar o vencedor
async function declareWinner(character1, character2) {

    console.log(`\n Resultado final:\n
        ${character1.name} : ${character1.point} ponto(s)\n
        ${character2.name} : ${character2.point} ponto(s)\n
    `);

    //condição para verificar quem é o vencedor
    if (character1.point > character2.point) {
        console.log(`${character1.name} é o grande vencedor da corrida! 🏆`);
    } else if (character1.point < character2.point) {
        console.log(`${character2.name} é o grande vencedor da corrida! 🏆`);
    } else {
        console.log("A corrida terminou em empate!");
    }

}

// Função assíncrona auto-invocável para iniciar a corrida
(async function main() {
    console.log("🏁 🚥 Bem-vindo ao jogo de corrida do Mario Kart! \n");

    // Pega as chaves dos personagens para podermos usar números
    const characterKeys = Object.keys(players);

    // Mostra a lista de personagens com números
    console.log("Escolha um personagem pelo número:");
    characterKeys.forEach((key, index) => {
        // (index + 1) para mostrar de 1 a 6, em vez de 0 a 5
        console.log(`${index + 1} - ${players[key].name}`);
    });
    console.log("\n");

    let p1Key, p2Key;
    let p1Id, p2Id;

    // --- VALIDAÇÃO DO JOGADOR 1 ---
    do {

        p1Key = await questionPlayers("Escolha o primeiro corredor (1-6): ");
        p1Id = parseInt(p1Key); // Converte o texto digitado para número

        // A condição para repetir é: o número é inválido OU é menor que 1 OU é maior que o número de personagens
        if (isNaN(p1Id) || p1Id < 1 || p1Id > characterKeys.length) {
            console.log("❌ Personagem inválido! Digite um número de 1 a 6.\n");
        }

    } while (isNaN(p1Id) || p1Id < 1 || p1Id > characterKeys.length);


    // --- VALIDAÇÃO DO JOGADOR 2 ---
    do {

        p2Key = await questionPlayers("Escolha o segundo corredor (1-6): ");
        p2Id = parseInt(p2Key); // Converte o texto digitado para número

        if (p1Id === p2Id) {
             console.log("❌ Jogador já selecionado! Escolha um corredor diferente.\n");
        } else if (isNaN(p2Id) || p2Id < 1 || p2Id > characterKeys.length) {
            console.log("❌ Personagem inválido! Digite um número de 1 a 6.\n");
        }
        
    } while (isNaN(p2Id) || p2Id < 1 || p2Id > characterKeys.length || p1Id === p2Id);

    // Fechamos a interface de leitura APÓS todas as perguntas serem respondidas corretamente
    questionPlayer.close();

    // Pegamos os jogadores corretos usando os números válidos
    // (p1Id - 1) porque o array começa em 0
    const player1 = players[characterKeys[p1Id - 1]];
    const player2 = players[characterKeys[p2Id - 1]];

    console.log(`\n🏁 🚥 Iniciando a corrida entre ${player1.name} e ${player2.name} começando... \n`);
    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);

})();