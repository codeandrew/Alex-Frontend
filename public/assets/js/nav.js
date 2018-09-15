const menuItems = [
  {
    menu : 'Home',
    icon : 'fas fa-home',
    link : 'index.html'
  },
  {
    menu : 'Catalog',
    icon : 'fa fa-briefcase',
    link : 'menu-item-catalog.html'
  },
  {
    menu : 'Promotions',
    icon : 'fa fa-briefcase',
    link : 'menu-item-promotions.html'
  },
  {
    menu : 'Special Offers',
    icon : 'fa fa-briefcase',
    link : 'menu-item-promotions.html#special-offers'
  },
  {
    menu : 'Request a Qoute',
    icon : 'fa fa-quote-right',
    link : 'index.html'
  },
  {
    menu : 'Customer Service',
    icon : 'fa fa-male fa-lg',
    link : 'index.html'
  },
  {
    menu : 'File a Claim',
    icon : 'fa fa-newspaper',
    link : 'form2-1-contact-data.html'
  },
  {
    menu : 'Setting',
    icon : 'fa fa-cog',
    link : 'menu-item-settings.html'
  }
]

const nav = {
  open(){
    document.getElementById("mySidenav").style.width = "250px";
  },
  close(){
    document.getElementById("mySidenav").style.width = "0";
  },
  menu : document.querySelector('#mySidenav')
}

const list = menuItems.map((x) => {
  let li = document.createElement("LI")
  return (
    `<li>
      <a href="${x.link}">
        <i class="${x.icon}"></i>
        ${x.menu}
      </a>
    </li>`
  )
})

const title = `<div class="title"> Menu </div >`
const footer = `
<div class="footer">
  <img class="logo" src="assets/images/icon.png" alt="">
</div >
 `
nav.menu.innerHTML = `
  ${title}
  <ul>
    ${list}
  </ul>
  ${footer}
`

document.querySelector('main')
.addEventListener('click', nav.close)
