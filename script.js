// JavaScript can be used to add functionality like opening images in a modal or performing other actions on click.

// For example, you can create a function to open images in a modal when clicked.
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(item => {
    item.addEventListener('click', openImage);
});

function openImage(event) {
    // Create a modal element and set its content to the clicked image.
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<img src="${event.target.src}" alt="${event.target.alt}">`;

    // Add a close button to the modal.
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    modal.appendChild(closeButton);

    // Append the modal to the body.
    document.body.appendChild(modal);

    // Add a click event listener to the close button.
    closeButton.addEventListener('click', () => {
        modal.remove(); // Close the modal when the close button is clicked.
    });
}

