const selectElement = document.querySelector('[data-select]');

selectElement.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-select-item')) {
        const itemTitle = event.target.getAttribute('data-select-item');
        event.target.closest('[data-select]').querySelector('[data-select-title]').textContent = itemTitle;
        event.target.closest('[data-select]').querySelector('.header-select__dropdown').classList.toggle('hidden');


    } else {
        this.querySelector('.header-select__dropdown').classList.toggle('hidden');
    }
})