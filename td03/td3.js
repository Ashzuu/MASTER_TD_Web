const nbCases = 16;
let tMotsFaits, mot, precNumCible, boutonEnfonce;

function fNbAlea(n) {
    return Math.floor(Math.random() * n);
}

function get(id) {}

function fTirage() {
	let tLettres = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B",
		"B", "C", "C", "D", "D", "D", "E", "E", "E", "E",
		"E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
		"E", "F", "F", "G", "G", "H", "H", "I", "I", "I",
		"I", "I", "I", "I", "I", "J", "K", "L", "L", "L",
		"L", "L", "M", "M", "M", "N", "N", "N", "N", "N",
		"N", "O", "O", "O", "O", "O", "O", "P", "P", "Q",
		"R", "R", "R", "R", "R", "R", "S", "S", "S", "S",
		"S", "S", "T", "T", "T", "T", "T", "T", "U", "U",
		"U", "U", "U", "U", "V", "V", "W", "X", "Y", "Z"];

	for (let i=0; i<nbCases; i++){
		let caseToFeed = document.getElementById('case'+i);
		const index = fNbAlea(tLettres.length)
		caseToFeed.innerText = tLettres[index];
		tLettres.slice(index, 1);
	}
}

function fEcouteSouris() {
	const plateau = document.getElementById("plateau");

	plateau.addEventListener('mousedown', fEnfonceBouton);
	plateau.addEventListener('mouseup', fRelacheBouton);

	const cases = document.getElementsByClassName("case");

	for (const singleCase of cases){
		singleCase.addEventListener('mousemove', fDeplaceSouris)
	}
}

function fInitGrille() {
	fTirage();
}

function fInitJeu() {
	fInitGrille();
	fEcouteSouris();
}

function fVoisines(c1, c2) {
	let idCase1 = c1.id.split("case")[1]
	let idCase2 = c2.id.split("case")[1]

	return (idCase1 === (idCase2 + 1))
		|| (idCase1 === (idCase2 - 1))
		|| (idCase1 === (idCase2 - nbCases - 1))
		|| (idCase1 === (idCase2 - nbCases))
		|| (idCase1 === (idCase2 - nbCases + 1))
		|| (idCase1 === (idCase2 + nbCases - 1))
		|| (idCase1 === (idCase2 + nbCases))
		|| (idCase1 === (idCase2 + nbCases + 1))

}

function fEnfonceBouton(evt) {
	boutonEnfonce = true;
}

function fRelacheBouton(evt) {
	console.log(evt)
}

function fDeplaceSouris(evt) {
	if(boutonEnfonce){

	}
	console.log(evt)
}

window.onload = fInitJeu;