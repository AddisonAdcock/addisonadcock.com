document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel__button--prev');
    const nextButton = document.querySelector('.carousel__button--next');
    const track = document.querySelector('.carousel__track');
    const cardWidth = document.querySelector('.project-card').offsetWidth;
    const gap = parseFloat(getComputedStyle(document.querySelector('.carousel__list')).gap);

    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * (cardWidth + gap);
        track.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        const maxIndex = document.querySelectorAll('.project-card').length - 1;
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });
});


function toggleSkill(skillId) {
    const details = document.getElementById(skillId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
