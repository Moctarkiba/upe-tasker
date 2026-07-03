/**
 * APPLICATION CLIENT « UPE-TASKER » - SCRIPT D'INTERACTION DOM
 * Université Privée de l'Estuaire - Module de Génie Logiciel
 * Classe : GRI2 • TD 2
 */

// PHASE 1 : SÉLECTION DES COMPOSANTS DANS L'ARBRE MÉMOIRE
const formulaireTaches = document.getElementById('task-form');
const champSaisieTache = document.getElementById('task-input');
const conteneurListeTaches = document.getElementById('task-list');

// PHASE 2 : BRANCHEMENT DU COMPORTEMENT APPLICATIF VIA L'ÉCOUTEUR
formulaireTaches.addEventListener('submit', function(evenementCapture) {
    
    // ÉTAPE DE SÉCURITÉ CRUCIALE : Annulation du rechargement automatique de la page
    evenementCapture.preventDefault();

    // Extraction et nettoyage de la chaîne textuelle saisie (.trim() retire les espaces vides)
    const intituleTacheNettoye = champSaisieTache.value.trim();

    // CONTRÔLE DE VALIDITÉ
    if (intituleTacheNettoye === "") {
        alert("Erreur de saisie : L'intitulé de la tâche universitaire ne peut être vide.");
        return; // Stoppe l'exécution
    }

    // PHASE 3 : CRÉATION ALGORITHMIQUE DE LA NOUVELLE ENTITÉ (Instanciation hors-sol)
    const nouvelElementLi = document.createElement('li');
    
    // SÉCURITÉ ANTI-XSS : textContent neutralise les balises HTML injectées par l'utilisateur
    nouvelElementLi.textContent = intituleTacheNettoye; 
    nouvelElementLi.classList.add('task-item');

    // PHASE 4 : INJECTION PHYSIQUE AU SEIN DE L'INTERFACE GRAPHIQUE (Déclenche Reflow & Repaint)
    conteneurListeTaches.appendChild(nouvelElementLi);

    // PHASE 5 : OPTIMISATION DE L'EXPÉRIENCE UTILISATEUR (UX)
    champSaisieTache.value = ""; // Réinitialise le champ de saisie
    champSaisieTache.focus();    // Repositionne le curseur automatiquement dans le champ
});