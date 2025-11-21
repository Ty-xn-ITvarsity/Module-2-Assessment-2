// Shop Category Filter: Shows/hides shop cards by category on shops.html
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const shopCards = document.querySelectorAll('.shop-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedCategory = this.getAttribute('data-category');
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            shopCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                card.style.display = (selectedCategory === 'all' || cardCategory === selectedCategory) ? 'block' : 'none';
            });
        });
    });
});

// Trailer Modal: Opens/closes movie trailers in a modal on movies.html
const trailerLinks = {
    'avengers': 'https://www.youtube.com/embed/TcMBFSGVi1c',
    'justice': 'https://www.youtube.com/embed/Ej-qNJoKR-E',
    'john': 'https://www.youtube.com/embed/M7XM597XO94',
    'matrix': 'https://www.youtube.com/embed/vKQi3bBA1y8'
};

function playTrailer(movieId) {
    const modal = document.getElementById('trailerModal');
    const trailerFrame = document.getElementById('trailerFrame');
    trailerFrame.src = trailerLinks[movieId];
    modal.style.display = 'block';
}

function closeTrailer() {
    const modal = document.getElementById('trailerModal');
    const trailerFrame = document.getElementById('trailerFrame');
    modal.style.display = 'none';
    trailerFrame.src = '';
}

// Closes trailer modal when clicking outside the modal (movies.html)
window.onclick = function(event) {
    const modal = document.getElementById('trailerModal');
    if (modal && event.target === modal) {
        closeTrailer();
    }
}

// Book Ticket: Alerts booking info for selected movie and time (movies.html)
function bookTicket(movieId) {
    const movieNames = {
        'avengers': 'The Avengers: Endgame',
        'justice': 'Justice League',
        'john': 'John Wick: Chapter 3',
        'matrix': 'The Matrix'
    };

    const radioButtons = document.querySelectorAll(`input[name="${movieId}-time"]`);
    let selectedTime = null;
    for (const radio of radioButtons) {
        if (radio.checked) {
            selectedTime = radio.value;
            break;
        }
    }

    if (selectedTime) {
        alert(`Booking ${movieNames[movieId]} at ${selectedTime}!\nRedirecting to payment...`);
        // window.location.href = 'booking.html?movie=' + movieId + '&time=' + selectedTime;
    } else {
        alert('Please select a showtime first!');
    }
}