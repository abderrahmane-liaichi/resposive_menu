const toggleBtn = document.querySelector('.toglle')
const toggleBtnIcon = document.querySelector('.toglle i')
const dropDwonMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDwonMenu.classList.toggle('open')
    const isOpen = dropDwonMenu.classList.contains('open')

    toggleBtnIcon.className = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}
