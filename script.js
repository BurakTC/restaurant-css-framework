// Fonction pour définir un cookie
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

// Fonction pour obtenir la valeur d'un cookie
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

// Vérifie si le cookie d'acceptation existe
const cookieAccepted = getCookie('cookieAccepted');

// Si le cookie n'existe pas, affiche la bannière de cookie
if (!cookieAccepted) {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookieButton = document.getElementById('accept-cookie');

    cookieBanner.style.display = 'block';

    acceptCookieButton.addEventListener('click', () => {
        setCookie('cookieAccepted', 'true', 365); // Définit le cookie d'acceptation pour 1 an
        cookieBanner.style.display = 'none';
    });
}
