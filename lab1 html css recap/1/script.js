document.addEventListener('DOMContentLoaded', () => {
    const reviewSections = document.querySelectorAll('.review-section');

    reviewSections.forEach(section => {
        const stars = section.querySelectorAll('.star');
        let currentRating = 0;

        stars.forEach((star, index) => {
            star.addEventListener('mouseenter', () => {
                highlightStars(index, stars);
            });

            star.addEventListener('mouseleave', () => {
                resetStars(stars, currentRating);
            });

            star.addEventListener('click', () => {
                currentRating = index + 1;
                setRating(currentRating, stars);
            });
        });

        function highlightStars(index, stars) {
            stars.forEach((star, i) => {
                star.classList.toggle('hovered', i <= index);
            });
        }

        function resetStars(stars, currentRating) {
            stars.forEach((star, i) => {
                star.classList.remove('hovered');
                star.classList.toggle('active', i < currentRating);
            });
        }

        function setRating(rating, stars) {
            stars.forEach((star, i) => {
                star.classList.toggle('active', i < rating);
            });
        }
    });
});
