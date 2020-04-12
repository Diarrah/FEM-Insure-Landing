let { body } = document;
let mobile_nav = document.querySelector('.mobile__nav');

mobile_nav.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('show');
})