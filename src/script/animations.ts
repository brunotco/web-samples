const animationDivs = document.querySelectorAll('[animation]');

animationDivs.forEach(div => {
    const animationSpan = div.children[0];
    const animationText = animationSpan.textContent;
    if (!animationText) return;
    separateAnimation(animationText, div);
});

function separateAnimation(text: string, parent: Element) {
    const separatedText = [];
    let animationTimer = 1;
    for (const letter of text) {
        const letterSpan = document.createElement('span');
        letterSpan.setAttribute('style', `--i:${animationTimer}`);
        letterSpan.textContent = letter;
        separatedText.push(letterSpan);
        animationTimer = +((animationTimer + 0.3).toFixed(1));
    }
    parent.replaceChildren();
    separatedText.forEach(span => parent.appendChild(span));
};