export class Router {
  routes = {}
  bg = {}

  add(routeName, page, bg) {
    this.routes[routeName] = page
    this.bg[routeName] = bg
  }
  
  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)
    
    this.handle()
  }

  handle() {
    const {pathname}  = window.location
    const route = this.routes[pathname] || this.routes[404]

    this.resetstyle()
    this.setstyle(pathname)
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }
    
  setstyle(pathname) {
    const root =  document.querySelector(':root')
    if (this.routes.hasOwnProperty(pathname)) {
      root.style.setProperty('--bg-image', `${this.bg[pathname]}`)
      document.querySelector(`[href='${pathname}']`).classList.add('bold')
    } else {
      root.style.setProperty('--bg-image', `${this.bg[404]}`)
    }
  }

  resetstyle() {
    const links = document.querySelectorAll('nav a')
    links.forEach(element => {
      element.classList.remove('bold')
    })
  }
}