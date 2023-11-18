// Contenido principal del index.js
const header = `
  <h1>Anime World</h1>
  <nav>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="animes-populares.html">Animes Populares</a></li>
      <li><a href="generos.html">Géneros</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
  <main>
    <!-- Agregar imagen principal -->
    <img src="imágenes/FATE.jpg" alt="Imagen principal de FATE" class="main-image">
    <article>
      <h2>Últimos Estrenos</h2>
      <p>Descubre los últimos animes que han llegado a la pantalla. No te pierdas las emocionantes historias y los personajes cautivadores.</p>
    </article>
  </main>
  <section class="container">
    <form>
      <h2>Contacto</h2>
      <p>¿Tienes alguna pregunta o comentario sobre nuestro sitio web o el mundo del anime? ¡Déjanos saber!</p>
      <ul class="flex-outer">
        <li>
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" placeholder="Tu nombre">
        </li>
        <li>
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Tu correo electrónico">
        </li>
        <li>
          <label for="mensaje">Mensaje</label>
          <textarea rows="6" id="mensaje" placeholder="Tu mensaje"></textarea>
        </li>
        <li>
          <button type="submit">Enviar</button>
        </li>
      </ul>
    </form>
  </section>
  <main>
    <p>&copy; 2023 Anime World</p>
  </main>
`;

// Crea los elementos y añádelos al body
const encabezado = document.createElement("header");
encabezado.innerHTML = header;
document.body.appendChild(encabezado);


    


    

