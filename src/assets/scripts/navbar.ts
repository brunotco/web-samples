const toggle = document.querySelector('[navbar-toggle]');
const links = document.querySelector('[navbar-links]');

if (toggle && links)
toggle.addEventListener('click', () => {
    links.classList.toggle('active');
});

document.addEventListener('click', e => {
    if (!e.target) return;
    const target: HTMLElement = e.target as HTMLElement;
    const isDropdownButton = target.matches('[data-dropdown-button]');
    if (!isDropdownButton && target.closest('[data-dropdown]') != null) return;
    let currentDropdown: HTMLElement | null;
    if (!isDropdownButton) return;
    currentDropdown = target.closest('[data-dropdown]');
    if (currentDropdown) currentDropdown.classList.toggle('active');
    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    });
});