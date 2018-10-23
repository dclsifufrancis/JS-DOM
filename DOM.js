// var tjs en haut de page //
// var laDivision = document.getElementById("ok");
// var nok = document.getElementsByClassName("identique");



// laDivision.innerHTML = "Hello world";
// identique.innerHTML = "J'aime le code !!!"

// ******ARRAY (liste)
// var desApprenants = ["Fabien", "Edains", "Quentin"];
// console.log(desApprenants.push("Christophe"));
// console.log(desApprenants[3]);

//*************Exercice carré rose *************//
// div 250 x 250
// au clic 500 x 500
// au clic 250 x 250

// var rose = document.getElementById("rose");
// var isActivated = false;

// rose.addEventListener("click",function (){
//         if (isActivated === false) {
//             rose.style.backgroundColor = "red";
//             rose.style.width = "500px";
//             rose.style.height = "500px";
//             isActivated = true;
//         } else {
//             rose.style.backgroundColor = "deeppink";
//             rose.style.width = "250px";
//             rose.style.height = "250px";
//             isActivated = false;
//         }
//     }
// );
//************************Exercice carré rouge**********************************
// var rouge = document.getElementById("rouge");


// btnJaune.addEventListener("click", function (){
//     rouge.style.backgroundColor = "yellow";
//     }
// );

// btnBleu.addEventListener("click", function (){
//     rouge.style.backgroundColor = "blue";
//     }
// );

// btn300px.addEventListener("click", function (){
//     rouge.style.width = "300px";
//     rouge.style.height = "300px";
// }
// );

// btnErase.addEventListener("click", function (){
//     rouge.style.visibility = "hidden";
//     }
// );

// btnRéinitialiser.addEventListener("click", function (){
//     rouge.style.visibility = "visible";
//     rouge.style.width = "100px";
//     rouge.style.height = "100px";
//     rouge.style.backgroundColor = "red";
//     }
// );

//************************SHI-FU-MI**********************************
//
// 
// l'utilisateur choisit et clic  entre pierre ou feuille ou ciseaux
//
// résultat doit s'afficher dans le cadre "Vous"
//
// PC choisit entre pierre ou feuille ou ciseaux
//
// on compare choixVous et choixIA
//
// Si choixvous = choixIA
//      affiché dans résultat Egalité
//
// Si choixvous = ciseaux et choixIA = papier
// Si choixvous = papier et choixIA = caillou
// Si choixvous = caillou et choixIA = ciseaux
//      afficher dans résultat Gagné // 
// 
// Si choix utilisateur = papier et  choix pc = ciseaux
// Si choix utilisateur = caillou et  choix pc = papier
// Si choix utilisateur = ciseaux et  choix pc = caillou
//      afficher dans résultat Perdu //  

var choixVous = document.getElementsByClassName("vous");
var choixIA = document.getElementsByClassName("I.A");
var btnCaillou = document.getElementById("caillou");
var btnPapier = document.getElementById("papier");
var btnCiseaux = document.getElementById("ciseaux");



function compare(choixVous , choixIA) {
    if ((choixVous == ciseaux) && (choixIA == papier) || (choixVous == papier) && (choixIA == caillou) || (choixVous == caillou) && (choixIA == ciseaux)) {
    console.log("Gagné !!!");
    }
    else if ((choixIA == ciseaux) && (choixVous == papier) || (choixIA == papier) && (choixVous == caillou) || (choixIA == caillou) && (choixVous == ciseaux)) {
    console.log("Perdu !!!");
    }
}
