const expansionPanels = document.querySelectorAll('[expansion-panel]');

expansionPanels.forEach(expansion => {
    expansion.addEventListener('click', e => {
        // Toggler on title only
        if (!e.target) return;
        const target: HTMLElement = e.target as HTMLElement;
        const activePanel = target.closest('[expansion-panel]');
        if (!activePanel) return;
        activePanel.classList.toggle('open');
    });
});