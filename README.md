<h1>Challenge del amigo secreto</h1>
El objetivo del proyecto es escribir en una página nombres de amigos, y que estos nombres aparezcan en la pantalla, posteriormente seleccionar el botón "Sortear amigo" y que el código, a través de un proceso aleatorio, seleccione a uno de los amigos de la lista.

<h2> Funcionamiento del código</h2>

- Primero se declara una variable llamada "amigo" que es un array vacío donde de guardarán los nombres que escriba el usuario.

- Posteriormente se agrega una función llamada "agregarAmigo" que conecta el botón del archivo .html y el archivo .jss además que permite     agregar los nombre de los amigos. Además, lanzará el mensaje "Debes agregar un amigo" si se presiona "agregar" cuando no se ha escrito       nada.
  
- amigo.push se utiliza para agregar amigos a la lista, posteriormente se genera la función "renderizarAmigos" que permite agregar los         amigos como elementos "li" al archivo html a través de inner.HTML. En este paso también se declara una variable "i" que inicia en 0 y se     suma uno en cada amigo que se agrega, considerando las posiciones del array.

- Se genera la función "sortearAmigo" que muestra el mensaje "No hay amigos para sortear" si no se ha escrito ningún nombre. A través de las   funciones Math.floor y Math.random, multiplicadas por la longitud del array, se sortea un amigo de la lista.
