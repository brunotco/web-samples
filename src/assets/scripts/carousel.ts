const carousels = document.querySelectorAll('[carousel]');
const carouselBtns = document.querySelectorAll('[carousel-button]');

function getActiveSlide(carousel: Element): { slides: NodeListOf<Element>, activeSlide: Element } {
    const slides = carousel.querySelectorAll('[carousel-slide]');
    const activeSlide = [...slides].find(slide => slide.hasAttribute('active-slide'));
    if (!activeSlide) {
        slides[0].setAttribute('active-slide', '');
        return { slides, activeSlide: slides[0] };
    }
    return { slides, activeSlide };
};

function nextSlide(carousel: Element, offset: number) {
    const { slides, activeSlide } = getActiveSlide(carousel);
    let newIndex: number;
    if (!activeSlide) {
        newIndex = 0 + offset;
    } else {
        newIndex = [...slides].indexOf(activeSlide) + offset;
        activeSlide.removeAttribute('active-slide');
    }
    if (newIndex < 0) newIndex = slides.length -1;
    if (newIndex >= slides.length) newIndex = 0;
    slides[newIndex].setAttribute('active-slide', '');
};

carousels.forEach(carousel => {
    getActiveSlide(carousel);
    const autoPlay = carousel.getAttribute('auto-play');
    if (autoPlay == null) return;
    setInterval(() => nextSlide(carousel, 1), ((Number(autoPlay) || 2) * 1000));
});

carouselBtns.forEach (button => {
    button.addEventListener('click', () => {
        const offset = button.getAttribute('carousel-button') === 'next' ? 1 : -1;
        const carousel = button.closest('[carousel]');
        if (!carousel) return;
        nextSlide(carousel, offset);
    });
});