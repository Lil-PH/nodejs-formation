<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=9745f5&height=120&section=header"/>

<h1 align="center">Desafio de projeto do Felipão: Mario Kart.JS</h1>

<br>

<p align="center">
    Este projeto foi desenvolvido como parte do <b>desafio de projeto do Felipão na DIO</b>, utilizando <b>Node.js</b> para simular corridas no estilo Mario Kart. 
</p>

<p align="center">
    A ideia foi transformar a lógica de um jogo de corrida em código, aplicando conceitos fundamentais de programação, como objetos, funções, sorteios aleatórios e regras de pontuação.
</p>

<br>

<div align="center">
  
  ![NODE.JS](https://img.shields.io/badge/-NODE.JS-0D1117?style=for-the-badge&logo=NODE.JS&labelColor=0D1117&textColor=0D1117)&nbsp;
  ![NPM](https://img.shields.io/badge/-NPM-0D1117?style=for-the-badge&logo=NPM&labelColor=0D1117&textColor=0D1117)&nbsp;
  ![JavaScript](https://img.shields.io/badge/-JavaScript-0D1117?style=for-the-badge&logo=javascript&labelColor=0D1117&textColor=0D1117)&nbsp;  

</div>

<div align="center">
  
  ![LICENSE](https://img.shields.io/github/license/Lil-PH/mario-kart-project?style=for-the-badge&labelColor=0D1117&textColor=0D1117)&nbsp;

</div>

<br>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

<label for="jogadores-item">O Computador ou Jogador deve receber dois personagens para disputar a corrida em um objeto cada</label>

<b>Pistas:</b>

<ul>
  <li><label for="pistas-1-item">Os personagens irão correr em uma pista aleatória de 5 rodadas</label></li>
  <li><label for="pistas-2-item">A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto</label>
    <ul>
      <li><label for="pistas-2-1-item">Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto</label></li>
      <li><label for="pistas-2-2-item">Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto</label></li>
      <li><label for="pistas-2-3-item">Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto</label></li>
      <li><label for="pistas-2-3-item">Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</label></li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b>

<label for="vitoria-item">Ao final, vence quem acumulou mais pontos</label>

---

<h3>⚙️ Novas funcionalidades:</h3>

<b>Escolher o seu Personagem favorito:</b>

<ul>
  <li><label for="jogadores-item-1">Você pode escolher os personagens (Jogador 1 e 2)</label></li>
</ul>

<b>Confronto:</b>

<ul>
  <li><label for="funcionalidade-1-item">É sorteado aleatoriamente se o Jogador vai acertar um Item no outro Jogador</label></li>
    <ul>
      <li><label for="funcionalidade-1-1-item">Caso for um Casco o jogodor que for atingido perde 1 ponto</label></li>
      <li><label for="funcionalidade-1-2-item">Caso for um Bomba o jogodor que for atingido perde 2 ponto</label></li>
    </ul>
  <li><label for="funcionalidade-2-item">O Jogador que vencer o confronto tem a possibilidade de ganhar um Turbo (Ganhando + 1 ponto)</label></li>
</ul>

---

## 🎯 Objetivos do projeto

- Criar um simulador de corrida inspirado em Mario Kart usando **Node.js**.
- Trabalhar com **objetos** para representar os personagens e seus atributos.
- Utilizar **aleatoriedade** para sorteio de blocos de pista e rolagens de dados.
- Implementar **regras de vitória** e penalidades, simulando a dinâmica de uma corrida real.
- Praticar boas práticas de programação em JavaScript.

---

📌 Repositório oficial do Treinamento **NODE.JS**: [Simulador Mario Kart](https://github.com/Lil-PH/nodejs-formation/tree/main/03-mario-kart-project)

---
<br>

<div align="center">

  <p>
    👨‍💻 Autor:
  </p>

<br>

  <samp>
    <p>
      <b>Pedro Henrique Silva Arnaut</b>
    </p>
  </samp>

<br>

  <p>
    <a href="https://github.com/Lil-PH"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>
    <a href="https://www.linkedin.com/in/pedro-henrique-silva-arnaut-7a9971245/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  </p>
  
</div>
