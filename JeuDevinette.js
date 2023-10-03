// Génération d'un nombre aléatoire entre 1 et 100
const nombreADeviner = Math.floor(Math.random() * 100) + 1;

// Initialisation du nombre de tentatives
let nombreDeTentatives = 0;

// Fonction pour vérifier la devinette de l'utilisateur
function devinerNombre() {
  
  const saisie = parseInt(prompt("Devinez le nombre entre 1 et 100 :"));

  // Vérifier si la saisie est un nombre valide
  if (isNaN(saisie) || saisie < 1 || saisie > 100) {
    alert("Veuillez entrer un nombre valide entre 1 et 100.");
    return;
  }

  // Incrémenter le nombre de tentatives
  nombreDeTentatives++;

  // Vérifier si la devinette est correcte
  if (saisie === nombreADeviner) {
    alert(`Felicitation ! Vous avez deviné le nombre en ${nombreDeTentatives} tentatives.`);
  } else if (saisie < nombreADeviner) {
    alert("Le nombre est trop petit. Veuillez reessayez à nouveau.");
  } else {
    alert("Le nombre est trop grand. Veuillez reessayez à nouveau.");
  }

  
  devinerNombre();
}

// Démarrer le jeu en appelant la fonction de devinette
devinerNombre();
