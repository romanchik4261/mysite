const menu = () => {
  const btnMenu = document.querySelector('.btn-menu')
  const menu = document.querySelector('.navigation')
  const btnClose = document.querySelector('.btn-close')

  const openMenu = () => {
    menu.style.display = 'flex'
  }

  const closeMenu = () => {
    menu.style.display = ''
  }

  btnMenu.addEventListener('click', openMenu)

  btnClose.addEventListener('click', closeMenu)
}

export default menu