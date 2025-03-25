
// // };
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
//     const heading = "je suis NDJAEPIMBI AMVOULA Naïsia Florida";
    
//     // Appel de la fonction pour afficher le titre de façon dynamique
//     typeWriter(document.getElementById("dynamic-text"), heading, 100); // 100ms par lettre
//     // Appel de la fonction pour afficher la description
//     typeWriter(document.getElementById("dynamic-description"), descriptionText, 50); // 50ms par lettre

//     // Ajouter un écouteur d'événement pour la soumission du formulaire
//     document.getElementById('contact-form').addEventListener('submit', function(event) {
//         event.preventDefault(); // Empêche la soumission du formulaire

//         // Soumettre le formulaire à Formspree
//         fetch(this.action, {
//             method: this.method,
//             body: new FormData(this),
//             headers: {
//                 'Accept': 'application/json'
//             }
//         })
//         .then(response => {
//             if (response.ok) {
//                 // Si la soumission est réussie, afficher le message de confirmation
//                 document.getElementById('confirmation-message').style.display = 'block';
//                 // Réinitialiser le formulaire
//                 document.getElementById('contact-form').reset();
//             } else {
//                 alert("Une erreur est survenue, veuillez réessayer.");
//             }
//         })
//         .catch(error => {
//             alert("Une erreur est survenue, veuillez réessayer.");
//         });
//     });
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
    // Texte pour la description et le titre
    const descriptionText = "Bienvenue sur mon profil";
    const heading = "je suis NDJAEPIMBI AMVOULA Naïsia Florida";
    
    // Appel de la fonction pour afficher le titre de façon dynamique
    typeWriter(document.getElementById("dynamic-text"), heading, 100); // 100ms par lettre
    // Appel de la fonction pour afficher la description de façon dynamique
    typeWriter(document.getElementById("dynamic-description"), descriptionText, 50); // 50ms par lettre

    // Ajouter un écouteur d'événement pour la soumission du formulaire
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission du formulaire par défaut

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
                // Si une erreur survient, afficher une alerte
                alert("Une erreur est survenue, veuillez réessayer.");
            }
        })
        .catch(error => {
            // Si une erreur de réseau survient, afficher une alerte
            alert("Une erreur est survenue, veuillez réessayer.");
        });
    });

    // Gestion du menu mobile
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    // Ajouter un événement au clic sur l'icône du menu pour ouvrir ou fermer le menu mobile
    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });
};
