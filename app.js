window.addEventListener("DOMContentLoaded", function () {
  var carousel = document.getElementById("carousel");
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var cards = document.querySelectorAll(".card");
  var currentIndex = 0;
  var cardChunkSize = 3;
  var maxIndex = Math.ceil(cards.length / cardChunkSize);

  function showCards() {
    cards.forEach(function (card, index) {
      var newIndex = (index + cards.length - currentIndex * cardChunkSize) % cards.length;
      if (newIndex >= currentIndex * cardChunkSize && newIndex < (currentIndex + 1) * cardChunkSize) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === maxIndex - 1;
  }

  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + maxIndex) % maxIndex;
    showCards();
    updateButtons();
  });

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % maxIndex;
    showCards();
    updateButtons();
  });

  showCards();
  updateButtons();
});
