document.querySelector('.search-button').addEventListener('click', function() {
    alert('This is a fake Google search!');
});

document.querySelectorAll('.search-button')[1].addEventListener('click', function() {
    window.location.href = 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/rabbit-care-sheet';
});

document.querySelector('.search-button').addEventListener('click', function() {
    const searchQuery = document.querySelector('.search-bar').value.trim().toLowerCase();
    
    if (searchQuery === 'bunny') {
        // Redirect to bunny facts page
        window.location.href = 'bunny.html';
    } 
});