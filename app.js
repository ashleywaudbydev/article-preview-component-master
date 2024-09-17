//-----VARIABLES-----\\
const iconButton = document.getElementById('icon');
const closeButton = document.getElementById('close-icon');
const modal = document.getElementById('share-modal');

//-----FUNCTIONS-----\\
function openModal() {
    modal.classList.toggle('show')
};
function closeModal() {
    modal.classList.remove('show')
};

//-----FUNCTION CALLS-----\\
iconButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

