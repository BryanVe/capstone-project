const addStylesToNode = (node, stylesObject) => {
  for(let styleKey of Object.keys(stylesObject)) 
    node.style[styleKey] = stylesObject[styleKey]
  
  return node
}

const addClassesToNode = (node, classes) => {
  const classList = classes.trim().split(' ')
  for(let className of classList)
    node.classList.add(className)
  
  return node
}

const removeClassesOfNode = (node, classes) => {
  const classList = classes.trim().split(' ')
  for(let className of classList)
    node.classList.remove(className)
  
  return node
}

const createNavbarButton = (innerText) => {
  let newButton = document.createElement('div')
  newButton.innerText = innerText
  newButton = addClassesToNode(newButton, 'navbar-button')
  return newButton
}

const createContentToOption = (html) => {
  let content = document.createElement('div')
  content.innerHTML = `<p>${html}</p>`

  return content
}

let itemSelected = 0
const wrapper = document.getElementById('wrapper')
let navbar = document.createElement('div')
let mainWrapper = document.createElement('div')
let mainContent = document.createElement('div')
let dropdownMenuButton = document.createElement('div')
navbar = addClassesToNode(navbar, 'navbar-wrapper')

const navbarElements = []
navbarElements.push({
  button: createNavbarButton('Integrantes'),
  content: createContentToOption('integrantes')
})
navbarElements.push({
  button: createNavbarButton('Documentación de red'),
  content: createContentToOption('docs')
})
navbarElements.push({
  button: createNavbarButton('Proyecto internetworking con GSN3'),
  content: createContentToOption('internetworking')
})
navbarElements.push({
  button: createNavbarButton('Administración de servicios'),
  content: createContentToOption('admin')
})

mainWrapper = addClassesToNode(mainWrapper, 'main-wrapper')
mainContent = addClassesToNode(mainContent, 'main-content')

const render = () => {
  mainWrapper.appendChild(mainContent)
  navbarElements.map((navbarElement, index) => {
    if(itemSelected === index) {
      navbarElement.button = addClassesToNode(navbarElement.button, 'navbar-button-selected')
      navbarElement.content = removeClassesOfNode(navbarElement.content, 'hide-section')
    }
    else {
      navbarElement.button = removeClassesOfNode(navbarElement.button, 'navbar-button-selected')
      navbarElement.content = addClassesToNode(navbarElement.content, 'hide-section')
    }
    navbar.appendChild(navbarElement.button)
    mainContent.appendChild(navbarElement.content)
  })
  wrapper.appendChild(navbar)
  wrapper.appendChild(mainWrapper)
}

navbarElements.map((navbarElement, index) => {
  navbarElement.button.onclick = () => {
    itemSelected = index
    render()
  }
})

render()