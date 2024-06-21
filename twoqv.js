document.addEventListener('DOMContentLoaded', () => {
  const puzzles = document.querySelectorAll('.puzzle');
  const dropZone = document.querySelector('.drop-zone');

  puzzles.forEach(puzzle => {
    puzzle.addEventListener('dragstart', dragStart);
    puzzle.addEventListener('dragend', dragEnd);
  });

  dropZone.addEventListener('dragover', dragOver);
  dropZone.addEventListener('dragenter', dragEnter);
  dropZone.addEventListener('dragleave', dragLeave);
  dropZone.addEventListener('drop', drop);

  function dragStart() {
    this.classList.add('dragging');
  }

  function dragEnd() {
    this.classList.remove('dragging');
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add('over');
  }

  function dragLeave() {
    this.classList.remove('over');
  }

  function drop() {
    this.classList.remove('over');
    const puzzle = document.querySelector('.dragging');
    this.appendChild(puzzle);
  }
});