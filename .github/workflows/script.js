document.addEventListener('DOMContentLoaded', function () {
  const optionBoxes = document.querySelectorAll('.option-box');

  optionBoxes.forEach(box => {
    box.addEventListener('click', function () {
      // Remove 'selected' and 'expanded' from all boxes
      optionBoxes.forEach(otherBox => {
        otherBox.classList.remove('selected', 'expanded');
        otherBox.querySelector('input[type="radio"]').checked = false;
      });

      // Add 'selected' and 'expanded' to the clicked box
      this.classList.add('selected', 'expanded');
      this.querySelector('input[type="radio"]').checked = true;
    });
  });
});
