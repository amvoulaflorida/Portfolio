// // document.querySelectorAll('.experience-item, .project-item').forEach(item => {
// //     item.addEventListener('click', function() {
// //         // Rediriger vers la page de détails
// //         console.log('Vous avez cliqué sur une expérience ou un projet');
// //     });
// // });
// // Fonction pour créer l'effet de texte "typewriter"
// function typeWriter(element, text, speed) {
//     let i = 0;
//     let interval = setInterval(function() {
//         if (i < text.length) {
//             element.innerHTML += text.charAt(i);
//             i++;
//         } else {
//             clearInterval(interval);
//         }
//     }, speed);
// }

// // Initialisation des textes à afficher
// window.onload = function() {
//     const descriptionText = "Bienvenue sur mon profile";
    
//     const heading = "je suis NDJAEPIMBI AMVOULA Naîsia Florida";
    
//     // Appel de la fonction pour afficher le titre de façon dynamique
//     typeWriter(document.getElementById("dynamic-text"), heading, 100); // 100ms par lettre
//     // Appel de la fonction pour afficher la description
//     typeWriter(document.getElementById("dynamic-description"), descriptionText, 50); // 50ms par lettre
// };
// Fonction pour créer l'effet de texte "typewriter"
function typeWriter(element, text, speed) {
    let i = 0;
    let interval = setInterval(function() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

// Initialisation des textes à afficher
window.onload = function() {
    const descriptionText = "Bienvenue sur mon profile";
    const heading = "je suis NDJAEPIMBI AMVOULA Naïsia Florida";
    
    // Appel de la fonction pour afficher le titre de façon dynamique
    typeWriter(document.getElementById("dynamic-text"), heading, 100); // 100ms par lettre
    // Appel de la fonction pour afficher la description
    typeWriter(document.getElementById("dynamic-description"), descriptionText, 50); // 50ms par lettre

    // Ajouter un écouteur d'événement pour la soumission du formulaire
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission du formulaire

        // Soumettre le formulaire à Formspree
        fetch(this.action, {
            method: this.method,
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Si la soumission est réussie, afficher le message de confirmation
                document.getElementById('confirmation-message').style.display = 'block';
                // Réinitialiser le formulaire
                document.getElementById('contact-form').reset();
            } else {
                alert("Une erreur est survenue, veuillez réessayer.");
            }
        })
        .catch(error => {
            alert("Une erreur est survenue, veuillez réessayer.");
        });
    });
};
