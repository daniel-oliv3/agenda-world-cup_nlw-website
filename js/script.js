/* JavaScript */

function createCard(){
  return `
    <div class="card">
			<h2>24/11 <span>Quinta</span></h2>
			<ul>
				<li>
					<img src="img/teams/icon=brazil.svg" alt="Bandeira do Brasil">
					<strong>07:00</strong>
					<img src="img/teams/icon=serbia.svg" alt="Bandeira da Sérvia">
				</li>
			</ul>
		</div>
  `;
}


document.querySelector("#app").innerHTML = `
  <header>
		<img src="img/assets/logo.svg" alt="Logo">
	</header>
	<main class="cards">
		${createCard()}
    ${createCard()}
    ${createCard()}
	</main>
 `









































