/* JavaScript */

function createGame(player1, hour, player2) {
  return `
    <li>
			<img src="img/teams/icon=${player1}.svg" alt="Bandeira do ${player1}">
			<strong>${hour}</strong>
			<img src="img/teams/icon=${player2}.svg" alt="Bandeira da ${player2}">
		</li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
			<h2>${date} <span>${day} </span></h2>
			<ul>
				${games}
			</ul>
		</div>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
		<img src="img/assets/logo.svg" alt="Logo">
	</header>
	<main id="cards">
		${createCard("24/11", "quinta", createGame("brazil", "16:30", "serbia"))}
    ${createCard("28/11", "segunda", createGame("brazil", "16:30", "serbia"))}
    ${createCard("02/12", "sexta", createGame("brazil", "16:30", "serbia"))}
	</main>
 `
