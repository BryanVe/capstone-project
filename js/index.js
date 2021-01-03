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
// TODO: agregar foto de Andy de ORCE
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
        <p class='member-name'>Andy Franco Aguilar Coronel</p>
      </div>
      <div class='member'>
        <img class='member-img' alt='member-1' src='https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png' />
        <p class='member-name'>Roberto Alexis Cerna Espíritu</p>
      </div>
    </div>
  `)
})
navbarElements.push({
  button: createNavbarButton('Bitácora'),
  content: createContentToOption(`
  <div class='bitacora'>
    <h1>Bitácora</h1>
    <h2>Bitácora Sede Central:</h2>
    <ul>
      <li><b>Fecha: 15/12/2020: </b>Propuesta de diseño de la topología de la sede Central</li>
      <li><b>Fecha: 17/12/2020: </b>Actualización de la topología añadimos routers por cada Departamento de las areas</li>
      <li><b>Fecha: 19/12/2020: </b>Actualización de la topologia añadimos un espacio llamado "Data Center" para colocar servidores propios de la empresa</li>
      <li><b>Fecha: 26/12/2020: </b>Asignación de direcciones IP estáticas a toda la topología incluyendo las VPCS y Servidores del Data Center</li>
      <li><b>Fecha: 27/01/2020: </b>Añadimos Servidor DHCP y Servidor Test al data center</li>
      <li><b>Fecha: 30/12/2020: </b>Actualización de la topología usamos una unico router en el Servicio de Informatica con 3 sub mascaras usando un switch con 3 WLAN</li>
      <li><b>Fecha: 01/01/2021: </b>Propuesta de diseño de topologia fisica de la sede Central</li>
    </ul>
    <h2>Bitácora Sede Atención al Cliente</h2>
    <ul>
      <li><b>Fecha: 11/12/2020 - 12/12/2020: </b>Topología de las 3 áreas de la sede atención al cliente (Atención a Servicios Empresariales, Atención al usuario, Recursos Humanos)</li>
      <li><b>Fecha: 19/12/2020: </b>Topología de la conexión entre las 3 áreas de la sede Central</li>
      <li><b>Fecha: 20/12/2020: </b>Topología de la conexión hacia las Sede Trujillo y Sede Central</li>
      <li><b>Fecha: 29/12/2020: </b>Llenado del inventario de la sede atención al cliente</li>
      <li><b>Fecha: 02/01/2021: </b>LLenado de los rangos de ip de la sede atención al cliente</li>
    </ul>
    <h2>Bitácora Sede Trujillo:</h2>
    <ul>
      <li><b>Fecha: 11/12/2020: </b>Propuesta de diseño de la topología de la sede Trujillo</li>
      <li><b>Fecha: 13/12/2020: </b>Actualización de la topología de forma que cada oficina y junto con el data center tengan un router que este conectado al router de frontera </li>
      <li><b>Fecha: 15/12/2020: </b>Asignación de direcciones IP estáticas a toda la topología incluyendo las VPCS y servidores asociados</li>
      <li><b>Fecha: 19/12/2020: </b>Actualización y configuración del servidor DHCP para proporcionar a las VPCS IP's dinámicas de modo que se facilite la configuración (todavía no funcionaba)</li>
      <li><b>Fecha: 27/01/2020: </b>Definición de las subnets en el archivo de configuración de DHCP para poder establecer los rangos de IP válidos para cada una.</li>
      <li><b>Fecha: 30/12/2020: </b>Implementación de políticas de enrutamiento en los routers mediante el uso de "ip route" para poder redireccionar a las subnets debidas en el enrutamiento. Y realización de pruebas con ping.</li>
      <li><b>Fecha: 01/01/2021: </b>Pruebas de solicitud DHCP en cada subnet para la asignación de IP's a las VPCS y realización de pruebas con "trace" para visualizar las redirecciones</li>
    </ul>
  </div>
  `)
})
navbarElements.push({
  button: createNavbarButton('Documentación de red'),
  content: createContentToOption(`
  <div class='docs'>
    <h2>Auditorías</h2>
    <h3>Auditoría Inventario:</h3>
    <ul>
      <li>Se muestra una tabla de acuerdo a los dispositivos de cada Sede:</li>
    </ul>
    <img src="/images/auditoria-inventario.jpg">

    <h3>Auditoría de Instalación:</h3>
    <ul>
      <li>Para las conexiones en las sedes Central y Atención al Cliente se han usado IP estáticas, para la sede Trujillo se han usado IP dinámicas.</li>
      <li>Todas las redes internas se está usando cable de red UTP CAT 6.</li>
      <li>En la sede Central se han usado routers 7200 de Cisco como referencia.</li>
      <li>En la sede Atención al Cliente se han usado routers 7200 de Cisco como referencia.</li>
      <li>En la sede Trujillo se han usado routers 3660 de Cisco como referencia.</li>
    </ul>
    
    <h3>Auditorías Operacional:</h3>
    <ul>
      <li>La conexión entre las sedes Central y Atención al Cliente se ha priorizado que sea por VPN para reducir costos.</li>
      <li>Los Routers usados tienen buena estabilidad y rendimiento pero pueden cambiarse por routers Cisco 2691 más accesibles.</li>
    </ul>
    
    <h3>Auditorías de eficiencia:</h3>
    <ul>
      <li>Se ha modelado de forma que se tenga la menor cantidad de Routers y más switches, para mejorar así el encaminamiento de la conexión entre los dispositivos.</li>
    </ul>
    
    <h3>Auditorías de seguridad:</h3>
    <ul>
      <li>Aún no se han instalado Firewalls, pero si hay routers para cada área de la sedes, para permitir puertas individuales a cada una.</li>
    </ul>
  </div>
  `)
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