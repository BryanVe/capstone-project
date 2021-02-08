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
        <img class='member-img' alt='member-1' src='./images/andy.jpg' />
        <p class='member-name'>Andy Franco Aguilar Coronel</p>
      </div>
      <div class='member'>
        <img class='member-img' alt='member-1' src='./images/roberto.jpeg' />
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
      <li><b>Fecha: 18/01/2021: </b>Actualizacion de toda la topologia fisica y logica de la sede central, eliminacion de routers y uso del protocolo dot1q.</li>
      <li><b>Fecha: 22/01/2021: </b>Implementacion, enrutamiento dinamico inter dominio , ripv2.</li>
      <li><b>Fecha: 02/01/2021: </b>Implementacion, posicionamiento de firewalls en la topologia fisica.</li>
      <li><b>Fecha: 07/01/2021: </b>Actualizacion, conexion de Sede Atencion a cliente y Sede Central, protocolo tipo BGP.</li>
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
      Esto nos ayudara a crear diferentes VLAN por puerto.</p>
    <a href='./images/imp-adicionales1.png' target='_blank'><img class='imp-adicional-img' src="./images/imp-adicionales1.png"></a>
    <a href='./images/imp-adicionales2.png' target='_blank'><img class='imp-adicional-img' src="./images/imp-adicionales2.png"></a>
    <a href='./images/imp-adicionales3.png' target='_blank'><img class='imp-adicional-img' src="./images/imp-adicionales3.png"></a>

    <h3>Referencias bibliográficas:</h3>
    <p>José Domingo Muñoz, Trabajando con switch en GNS3: VLAN y Trunk. <a href="https://www.josedomingo.org/pledin/2014/02/trabajando-con-switch-en-gns3-vlan-y-trunk/">Link</a> </p> 
    <p>Manuel de Jesús Flores, Universidad Luteriana Salvadoreña, Direccionamiento VLAN. <a href='https://es.calameo.com/read/004816174785e8aacadc3'>Link</a></p>
    <p>Topología de red. <a href='https://www.lifeder.com/topologias-de-red/'>Link</a></p>
    <p>A Network Lab Management System Proposal for Network and Security Education. <a href='https://www.researchgate.net/figure/Sample-GNS3-topology-as-a-routing-assignment_fig2_316597594'>Link</a></p>
    <p>Servidor DHCP. <a href='https://fp.josedomingo.org/serviciosgs/u02/'>Link</a></p>
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
    <a href='./images/auditoria-inventario.jpg' target='_blank'><img src="./images/auditoria-inventario.jpg"></a>

    <h3>Auditoría de Instalación:</h3>
    <ul>
      <li>Para las conexiones en las sedes Central y Atención al Cliente se han usado IP estáticas, para la sede Trujillo se han usado IP dinámicas.</li>
      <li>Todas las redes internas se está usando cable de red UTP CAT 6.</li>
      <li>En la sede Central se han usado routers 3660 y 7200 de Cisco como referencia.</li>
      <li>En la sede Atención al Cliente se han usado routers 3660 y 7200 de Cisco como referencia.</li>
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
    <h4>Conexión WAN entre sedes</h4>
    <a href='./images/wan-logica.png' target='_blank'><img class='imp-adicional-img' src="./images/wan-logica.png"></a>
    <h4>Firewall entre sedes</h4>
    <a href='./images/firewall-sedes.png' target='_blank'><img class='imp-adicional-img' src="./images/firewall-sedes.png"></a>
    <h4>Sede Central</h4>
    <a href='./images/central-general-logica.png' target='_blank'><img class='imp-adicional-img' src="./images/central-general-logica.png"></a>
    <h4>Sede Atención al Cliente</h4>
    <a href='./images/atencion-cliente-logica.png' target='_blank'><img class='imp-adicional-img' src="./images/atencion-cliente-logica.png"></a>
    <h4>Sede Trujillo</h4>
    <a href='./images/trujillo-logica.png' target='_blank'><img class='imp-adicional-img' src="./images/trujillo-logica.png"></a>


    <h3>Topología física</h3>
    <h4>Conexión WAN entre sedes</h4>
    <a href='./images/wan-fisica.png' target='_blank'><img class='imp-adicional-img' src="./images/wan-fisica.png"></a>
    <h4>Sede Central</h4>
    <h5>Servicio de informática</h5>
    <a href='./images/informatica-central-fisica.png' target='_blank'><img class='imp-adicional-img' src="./images/informatica-central-fisica.png"></a>
    <h5>Área de gerencias</h5>
    <a href='./images/oficina-gerencias-fisica.png' target='_blank'><img class='imp-adicional-img' src="./images/oficina-gerencias-fisica.png"></a>
    <h5>Área de estrategias empresariales</h5>
    <a href='./images/empresariales-fisica.png' target='_blank'><img class='imp-adicional-img' src="./images/empresariales-fisica.png"></a>
    
    <h4>Sede Atención al Cliente</h4>
    <h5>Área Atención a servicios empresariales</h5>
    <a href='./images/servicios-empresariales.png' target='_blank'><img class='imp-adicional-img' src="./images/servicios-empresariales.png"></a>

    <h5>Área de Atención al usuario</h5>
    <a href='./images/atencion-usuario.png' target='_blank'><img class='imp-adicional-img' src="./images/atencion-usuario.png"></a>

    <h5>Área de Recursos Humanos</h5>
    <a href='./images/recursos-humanos.png' target='_blank'><img class='imp-adicional-img' src="./images/recursos-humanos.png"></a>

    <h4>Sede Trujillo</h4>
    <h5>Oficinas de jefatura</h5>
    <a href='./images/jefatura-fisica.png' target='_blank'><img class='imp-adicional-img' src="./images/jefatura-fisica.png"></a>
    <h5>Oficinas de estrategia empresarial</h5>
    <a href='./images/estrategia-trujillo-fisica.png' target='_blank'><img class='imp-adicional-img' src="./images/estrategia-trujillo-fisica.png"></a>
    <h5>Data Center Trujillo</h5>
    <a href='./images/data-center-trujillo-fisica.png' target='_blank'><img class='imp-adicional-img' src="./images/data-center-trujillo-fisica.png"></a>

    <h3>Centralización de servidores</h3>
    <p>Se ha realizado la centralización de los servidores en la sede Central en el área de servicio de informática y ya que la sede Atención al Cliente se encuentra cerca a la sede Central simplemente esta se comunica con la central directamente. Caso contrario para la sede Trujillo por la distancia que existe entre esta y la sede Central consideramos conveniente implementar un Data Center en esta sede con el objetivo de centralizar las solicitudes localmente y luego esto transmitirlo al Data Center Central cada cierto tiempo. Todo esto con el objetivo de evitar fallas al momento de hacer solicitudes al Data Center Central. Por lo tanto para nuestra topología tenemos los dos siguientes Data Centers.</p>
    <h4>Data Center Central</h4>
    <a href='./images/data-center-central.png' target='_blank'><img class='imp-adicional-img' src="./images/data-center-central.png"></a>
    <h4>Data Center Trujillo</h4>
    <a href='./images/data-center-trujillo.png' target='_blank'><img class='imp-adicional-img' src="./images/data-center-trujillo.png"></a>
    
    <h3>Direccionamiento IP</h3>
    <h4>Sede Central</h4>
    <a href='./images/central-ips.png' target='_blank'><img class='imp-adicional-img' src="./images/central-ips.png"></a>

    <h4>Sede Atención al Cliente</h4>
    <a href='./images/atencion-ips.png' target='_blank'><img class='imp-adicional-img' src="./images/atencion-ips.png"></a>

    <h4>Sede Trujillo</h4>
    <a href='./images/trujillo-ips.png' target='_blank'><img class='imp-adicional-img' src="./images/trujillo-ips.png"></a>


  </div>
  `)
})
navbarElements.push({
  button: createNavbarButton('Administración de servicios'),
  content: createContentToOption(`
  <div class='servicios'>
    <h3>Políticas de enrutamiento</h3>
    <p>Se realizó las políticas de enrutamiento en la sede Trujillo en cada router de forma que toda la sede posea conexión y se pueda hacer <code>ping</code> entre todos los nodos de la topología. Para ello configuramos cada router con <code>ip route "subred" "máscara" "ip-redirección"</code>.</p>
    <h4>Ejemplo</h4>
    <a href='./images/politicas1.png' target='_blank'><img class='imp-adicional-img' src="./images/politicas1.png"></a>
    <a href='./images/politicas2.png' target='_blank'><img class='imp-adicional-img' src="./images/politicas2.png"></a>

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
    
    <p>La configuración del archivo ubicado en <code>/etc/named.conf</code> para poder establecer la IP del servidor DNS, y las IP's autorizadas para poder usar el servicio así como las zonas respectivas (directa e inversa).</p>
    <a href='./images/dns-conf2.png' target='_blank'><img class='imp-adicional-img' src="./images/dns-conf2.png"></a>
    <a href='./images/dns-conf3.png' target='_blank'><img class='imp-adicional-img' src="./images/dns-conf3.png"></a>

    <p>Luego configurar los archivos que referenciamos en el archivo anterior, <code>/var/named/capstone.uni</code> (directa) y <code>/var/named/9.168.192.revzone.dns</code> (inversa)</p>
    <a href='./images/dns-conf4.png' target='_blank'><img class='imp-adicional-img' src="./images/dns-conf4.png"></a>
    <a href='./images/dns-conf5.png' target='_blank'><img class='imp-adicional-img' src="./images/dns-conf5.png"></a>

    <p>Establecemos también el host respectivo en <code>/etc/hosts</code></p>
    <a href='./images/dns-conf6.png' target='_blank'><img class='imp-adicional-img' src="./images/dns-conf6.png"></a>

    <p>Y también configuramos el archivo <code>/etc/resolv.conf</code></p>
    <a href='./images/dns-conf7.png' target='_blank'><img class='imp-adicional-img' src="./images/dns-conf7.png"></a>

    <p>Podemos probar primero en el mismo servidor DNS su adecuado funcionamiento con <code>nslookup</code></p>
    <a href='./images/dns-conf8.png' target='_blank'><img class='imp-adicional-img' src="./images/dns-conf8.png"></a>
    <a href='./images/dns-conf9.png' target='_blank'><img class='imp-adicional-img' src="./images/dns-conf9.png"></a>

    <p>Para probar el servicio en nuestra topología nos dirigimos a una VPC cualquiera de la red y como el servicio DHCP ya nos otorga la dirección IP de nuestro servidor DNS ya que ya está configurado, podemos hacer directamente un <code>ping</code> a los diferentes dominios que hemos definido para los distintos departamentos de la sede Trujillo.</p>
    <a href='./images/dns-conf10.png' target='_blank'><img class='imp-adicional-img' src="./images/dns-conf10.png"></a>
    <a href='./images/dns-conf11.png' target='_blank'><img class='imp-adicional-img' src="./images/dns-conf11.png"></a>
    <a href='./images/dns-conf12.png' target='_blank'><img class='imp-adicional-img' src="./images/dns-conf12.png"></a>
    <a href='./images/dns-conf13.png' target='_blank'><img class='imp-adicional-img' src="./images/dns-conf13.png"></a>
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