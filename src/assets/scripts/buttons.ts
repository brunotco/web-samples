const notifBadge = document.querySelector('[badge-count]');
const notifIncrease = document.querySelector('[badge-count-increase]');

if (notifIncrease && notifBadge) {
    notifIncrease.addEventListener('click', () => {
        let currentCount = Number(notifBadge.getAttribute('badge-count'));
        notifBadge.setAttribute('badge-count', `${ ++currentCount }`);
        if (currentCount > 0) notifBadge.classList.remove('no-count');
    });
}