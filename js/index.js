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
  content.style.height = '100%'
  content.innerHTML = html

  return content
}

let itemSelected = 0
const wrapper = document.getElementById('wrapper')
let navbar = document.createElement('div')
let mainWrapper = document.createElement('div')
let mainContent = document.createElement('div')
navbar = addClassesToNode(navbar, 'navbar-wrapper')

const navbarElements = []
navbarElements.push({
  button: createNavbarButton('Integrantes'),
  content: createContentToOption(`
    <div class='members'>
      <div class='member'>
        <img class='member-img' alt='member-1' src='https://avatars3.githubusercontent.com/u/45080817?s=400&u=8cd9a60cf18c63fdcc88dc3b2eb13a18b3503d30&v=4' />
        <p class='member-name'>George Bryan Vera Esquives</p>
      </div>
      <div class='member'>
        <img class='member-img' alt='member-2' src='https://avatars1.githubusercontent.com/u/44950600?s=400&u=8630fe0f5841d5626b799ad6e67bdcef5c0cb565&v=4' />
        <p class='member-name'>Brando Miguel Palacios Mogollón</p>
      </div>
      <div class='member'>
        <img class='member-img' alt='member-1' src='https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png' />
        <p class='member-name'>George Bryan Vera Esquives</p>
      </div>
      <div class='member'>
        <img class='member-img' alt='member-1' src='https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png' />
        <p class='member-name'>Roberto Alexis Cerna Espíritu</p>
      </div>
    </div>
  `)
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