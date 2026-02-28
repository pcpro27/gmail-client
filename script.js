// Exemple de données simulées pour les emails
const emails = [
    { id: 1, from: "Asmodee", subject: "Nouveau jeu disponible", date: "28/02/2026", body: "Découvrez notre dernier jeu Bloops !" },
    { id: 2, from: "GitHub", subject: "Nouvelle connexion", date: "28/02/2026", body: "Un nouvel appareil s'est connecté à votre compte." }
];

// Afficher la liste des emails
function displayEmails() {
    const emailList = document.getElementById('emailList');
    emailList.innerHTML = '';
    emails.forEach(email => {
        const emailElement = document.createElement('div');
        emailElement.className = 'email-item';
        emailElement.innerHTML = `
            <h3>${email.subject}</h3>
            <p><strong>De :</strong> ${email.from}</p>
            <p>${email.date}</p>
        `;
        emailElement.addEventListener('click', () => {
            displayEmailContent(email);
        });
        emailList.appendChild(emailElement);
    });
}

// Afficher le contenu d'un email
function displayEmailContent(email) {
    const emailContent = document.getElementById('emailContent');
    emailContent.innerHTML = `
        <h2>${email.subject}</h2>
        <p><strong>De :</strong> ${email.from}</p>
        <p><strong>Date :</strong> ${email.date}</p>
        <p>${email.body}</p>
    `;
}

// Charger les emails au démarrage
document.addEventListener('DOMContentLoaded', displayEmails);