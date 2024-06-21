const words = document.querySelectorAll('.word');
const imageContainers = document.querySelectorAll('.image-container');

words.forEach(word => {
    word.addEventListener('dragstart', dragStart);
});

imageContainers.forEach(container => {
    container.addEventListener('dragover', dragOver);
    container.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const wordId = event.dataTransfer.getData('text');
    const wordElement = document.getElementById(wordId);
    const correctWord = event.target.getAttribute('data-word');
    if (wordId === correctWord) {
        event.target.appendChild(wordElement);
        wordElement.setAttribute('draggable', 'false');
        wordElement.style.backgroundColor = '#8bc34a';
    }
}