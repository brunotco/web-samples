const sidebarToggle = document.querySelector('[sidebar-toggle]');
const sidebarLinks = document.querySelectorAll('[sidebar-links]');
let activeLink: HTMLButtonElement;

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', e => {
        if (!e.target) return;
        const target: HTMLElement = e.target as HTMLElement;
        const sidebar = target.closest('.sidebar');
        if (!sidebar) return;
        sidebar.classList.toggle('open');
    });
};

if (sidebarLinks) {
    sidebarLinks.forEach(linksGroup => {
        const links = linksGroup.querySelectorAll('button');
        const active = [...links].find(link => link.classList.contains('active'));
        if (active) activeLink = active;
        links.forEach(link => {
            link.addEventListener('click', () => {
                moveActiveLink(link);
            });
        });
    });
};

function moveActiveLink(linkBtn: HTMLButtonElement) {
    activeLink.classList.remove('active');
    linkBtn.classList.add('active');
    activeLink = linkBtn;
}