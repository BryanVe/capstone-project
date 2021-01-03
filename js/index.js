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
    <h2>Bitácora</h2>
    <p>La implementación realizada es de modelos estructurados de 3 Sedes de una empresa:
    <p>La Sede Central con 3 áreas: Servicio de Informática, Área de Gerencias y Área de Estrategias Empresariales.</p>
    <p>La Sede Atención al cliente también con 3 áreas: Área Atención a servicios Empresariales, Área de Atención al Usuario y Área de Recursos Humanos.</p>
    <p>La Sede Trujillo con 2 áreas: Oficinas de Jefatura y Oficinas de estrategia Empresarial. La sede Trujillo está ubicada a 560km de la sede central.</p>
    <p>Las 3 sedes se interconectan por una red VPN desde un servidor de la sede central.</p>
    <h3>Fechas Sede Central:</h3>
    <ul>
      <li><b>Fecha: 15/12/2020: </b>Propuesta de diseño de la topología de la sede Central</li>
      <li><b>Fecha: 17/12/2020: </b>Actualización de la topología añadimos routers por cada Departamento de las areas</li>
      <li><b>Fecha: 19/12/2020: </b>Actualización de la topologia añadimos un espacio llamado "Data Center" para colocar servidores propios de la empresa</li>
      <li><b>Fecha: 26/12/2020: </b>Asignación de direcciones IP estáticas a toda la topología incluyendo las VPCS y Servidores del Data Center</li>
      <li><b>Fecha: 27/01/2020: </b>Añadimos Servidor DHCP y Servidor Test al data center</li>
      <li><b>Fecha: 30/12/2020: </b>Actualización de la topología usamos una unico router en el Servicio de Informatica con 3 sub mascaras usando un switch con 3 WLAN</li>
      <li><b>Fecha: 01/01/2021: </b>Propuesta de diseño de topologia fisica de la sede Central</li>
    </ul>
    <h3>Fechas Sede Atención al Cliente</h3>
    <ul>
      <li><b>Fecha: 11/12/2020 - 12/12/2020: </b>Topología de las 3 áreas de la sede atención al cliente (Atención a Servicios Empresariales, Atención al usuario, Recursos Humanos)</li>
      <li><b>Fecha: 19/12/2020: </b>Topología de la conexión entre las 3 áreas de la sede Central</li>
      <li><b>Fecha: 20/12/2020: </b>Topología de la conexión hacia las Sede Trujillo y Sede Central</li>
      <li><b>Fecha: 29/12/2020: </b>Llenado del inventario de la sede atención al cliente</li>
      <li><b>Fecha: 02/01/2021: </b>LLenado de los rangos de ip de la sede atención al cliente</li>
    </ul>
    <h3>Fechas Sede Trujillo:</h3>
    <ul>
      <li><b>Fecha: 11/12/2020: </b>Propuesta de diseño de la topología de la sede Trujillo</li>
      <li><b>Fecha: 13/12/2020: </b>Actualización de la topología de forma que cada oficina y junto con el data center tengan un router que este conectado al router de frontera </li>
      <li><b>Fecha: 15/12/2020: </b>Asignación de direcciones IP estáticas a toda la topología incluyendo las VPCS y servidores asociados</li>
      <li><b>Fecha: 19/12/2020: </b>Actualización y configuración del servidor DHCP para proporcionar a las VPCS IP's dinámicas de modo que se facilite la configuración (todavía no funcionaba)</li>
      <li><b>Fecha: 27/01/2020: </b>Definición de las subnets en el archivo de configuración de DHCP para poder establecer los rangos de IP válidos para cada una.</li>
      <li><b>Fecha: 30/12/2020: </b>Implementación de políticas de enrutamiento en los routers mediante el uso de "ip route" para poder redireccionar a las subnets debidas en el enrutamiento. Y realización de pruebas con ping.</li>
      <li><b>Fecha: 01/01/2021: </b>Pruebas de solicitud DHCP en cada subnet para la asignación de IP's a las VPCS y realización de pruebas con "trace" para visualizar las redirecciones</li>
    </ul>
    <h3>Inconvenientes con el estudio del proyecto:</h3>
    <p>Se tuvo la duda del tipo de conexión que usará la empresa para la comunicación entre la sede Central y la de atención al Cliente, podría ser conexión directa a través de fibra óptica, o a través de una red VPN. La solución más accesible sería por VPN la cual es la que se está implementando en el modelamiento.</p>

    <h3>Inconvenientes con la implementación:</h3>
    <p>Es complicado crear una topología que se vea de manera completa en un solo proyecto de gns3, así que la implementación se ha llevado por partes, mostrando cada sede, y también mostrando un resumen de interconexión entre las sedes.</p>

    <h3>Inconvenientes con los requisitos:</h3>
    <p>Uno de los inconvenientes es no conocer el plano interno de la empresa, el modelado se realiza a partir de un modelo conceptual de posibles ubicaciones, estos pueden adaptarse al plano real de la empresa.</p>

    <h3>Problemas que hayan surgido con su resolución:</h3>
    <p>Existieron problemas con la implementación DHCP, en la sede Trujillo, en la configuración interna del servidor, Se arregló reescribiendo los archivos de configuración DHCP del servidor.</p>

    <h3>Implementaciones adicionales:</h3>
    <p>Se implemento el protocolo IEEE 802.1Q conocido en GNS3 como dot1Q, genera un mecanismo que crea varias redes por un mismo medio fisico (switch) utilizando una misma interfaz en el cual se le añaden "sub interfazes" para generar varias redes, es decir el router tendra mas de una ip en la misma interfaz.
      Este se debe añadir en la configuracion del switch teniendo encuenta el puerto especifico.
      Esto nos ayudara a crear diferentes VLAN por puerto.[1]</p>
    <a href='./images/imp-adicionales1.png' target='_blank'><img class='imp-adicional-img' src="./images/imp-adicionales1.png"></a>
    <a href='./images/imp-adicionales2.png' target='_blank'><img class='imp-adicional-img' src="./images/imp-adicionales2.png"></a>
    <a href='./images/imp-adicionales3.png' target='_blank'><img class='imp-adicional-img' src="./images/imp-adicionales3.png"></a>

    <h3>Referencias bibliográficas:</h3>
    <p>[1] José Domingo Muñoz, Trabajando con switch en GNS3: VLAN y Trunk. <a href="https://www.josedomingo.org/pledin/2014/02/trabajando-con-switch-en-gns3-vlan-y-trunk/">Link</a> </p> 


    
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
    <img src="./images/auditoria-inventario.jpg">

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
  content: createContentToOption(`
  <div class='internetworking'>
    <h3>Topología lógica</h3>
    <h3>Topología física</h3>
    <h3>Centralización de servidores</h3>
    <h3>Acceso a internet</h3>
    <h3>Acceso remoto</h3>
    <h3>Direccionamiento IP</h3>
  </div>
  `)
})
navbarElements.push({
  button: createNavbarButton('Administración de servicios'),
  content: createContentToOption(`
  <div class='servicios'>
    <h3>Políticas de enrutamiento</h3>
    <h3>Configuración DHCP</h3>
    <p>Para poder realizar esta configuración es necesario que haya conexión en toda la red de la sede Trujillo, es decir que haya ping entre dispositivos de la red.</p>
    <p>La configuración del archivo ubicado en <code>/etc/sysconfig/network-scripts/ifcfg-enp0s3</code> para poder establecer una dirección IP estática, una máscara y la IP del servidor DNS.</p>
    <a href='./images/dhcp-conf1.png' target='_blank'><img class='imp-adicional-img' src="./images/dhcp-conf1.png"></a>

    <p>La configuración del archivo ubicado en <code>/etc/dhcp/dhcpd.conf</code> para definir todas las subredes que tenemos en nuestra topología de la sede Trujillo.</p>
    <a href='./images/dhcp-conf2.png' target='_blank'><img class='imp-adicional-img' src="./images/dhcp-conf2.png"></a>
    <a href='./images/dhcp-conf3.png' target='_blank'><img class='imp-adicional-img' src="./images/dhcp-conf3.png"></a>

    <p>Luego reiniciamos el servicio de <code>network</code> y <code>dhcpd</code> y los habilitamos para que ejecuten cada vez que reinicie el servidor DHCP.</p>
    <div><code>systemctl restart network</code></div>
    <div><code>systemctl enable network</code></div>
    <div><code>systemctl restart dhcpd</code></div>
    <div><code>systemctl enable dhcpd</code></div>
    <p>Ahora nos dirigimos hacia nuestra topología en GNS3 y configuramos los routers de la red como <code>relay-agent</code> para poder utilizar el servicio DHCP entre subredes de la siguiente manera:</p>
    <a href='./images/dhcp-conf6.png' target='_blank'><img class='imp-adicional-img' src="./images/dhcp-conf6.png"></a>

    <p>Finalmente nos dirigimos hacia alguna de nuestras VPC's dentro de la red y probamos solicitando una IP con DHCP:</p>
    <a href='./images/dhcp-conf4.png' target='_blank'><img class='imp-adicional-img' src="./images/dhcp-conf4.png"></a>
    <p>Podemos comprobar que efectivamente tenemos una IP y podemos hacer ping hacia el servidor DHCP por ejemplo:</p>
    <a href='./images/dhcp-conf5.png' target='_blank'><img class='imp-adicional-img' src="./images/dhcp-conf5.png"></a>

    <h3>Configuración DNS</h3>
    <p>Para esta configuración análogamente al servicio DHCP, también requerimos que haya conexión en toda la red de la sede Trujillo.</p>
    <p>La configuración del archivo ubicado en <code>/etc/sysconfig/network-scripts/ifcfg-enp0s3</code> para poder establecer una dirección IP estática al servidor DNS.</p>
    <a href='./images/dns-conf1.png' target='_blank'><img class='imp-adicional-img' src="./images/dns-conf1.png"></a>

    <h3>Políticas de seguridad</h3>
  </div>
  `)
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