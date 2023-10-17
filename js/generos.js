
export const header = 
`
<h1>Géneros</h1>

`;

export const Generos =
`
<img src="imágenes/Generos-Anime.jpg" alt="Géneros de Anime" class="main-image">
<main>
    <section class="genero">
        <h2>Acción</h2>
        <p>El género de acción se centra en la actividad física, la velocidad y los desafíos emocionantes. 
            Estas historias suelen incluir escenas de combate, persecuciones, hazañas atléticas y situaciones de alto riesgo. 
            Los personajes principales suelen estar involucrados en situaciones donde deben superar obstáculos, 
            luchar contra antagonistas o resolver problemas utilizando habilidades físicas y mentales.</p>
    </section>

    <section class="genero">
        <h2>Aventura</h2>
        <p> La aventura implica la participación activa de los personajes en situaciones emocionantes y peligrosas, 
            a menudo en un viaje o búsqueda significativa. Estas historias incluyen exploración, 
            descubrimiento y desafíos que ponen a prueba la valentía y habilidades de los personajes. 
            Las aventuras pueden tener lugar en diversos escenarios, 
            desde mundos exóticos hasta entornos históricos o futuristas. </p>
    </section>

    <section class="genero">
        <h2>Comedia</h2>
        <p>La comedia tiene como objetivo principal hacer reír al público. Estas historias presentan situaciones humorísticas, 
            personajes divertidos y diálogos ingeniosos. La comedia se basa en la exageración, 
            la ironía y a menudo se burla de las debilidades humanas y las situaciones embarazosas. 
            Los elementos cómicos pueden surgir de malentendidos, enredos, 
            juegos de palabras y caricaturas de la realidad.</p>
    </section>
  
    <section class="genero">
        <h2>Drama</h2>
        <p> El drama se centra en conflictos emocionales y situaciones serias que enfrentan los personajes. 
            Estas historias exploran temas profundos como el amor, la pérdida, el conflicto interpersonal, 
            la lucha por el poder o la superación personal. 
            Los dramas tienden a enfocarse en el desarrollo de los personajes y provocar una respuesta emocional del espectador, 
            como empatía, tristeza o simpatía.</p>
    </section>

    <section class="genero">
        <h2>Fantasía</h2>
        <p> La fantasía incluye elementos imaginarios y sobrenaturales que no existen en el mundo real. 
            Estas historias pueden involucrar criaturas míticas, magia, mundos alternativos, poderes sobrenaturales y aventuras en lugares extraordinarios. 
            La fantasía crea un universo completamente nuevo con reglas únicas que difieren del mundo real, permitiendo la exploración de la creatividad y la maravilla.</p>
    </section>

    <section class="genero">
        <h2>Magia</h2>
        <p>Las historias de magia se centran en el uso de poderes sobrenaturales y mágicos por parte de los personajes. 
            Estos poderes pueden incluir hechizos, encantamientos, objetos mágicos, telequinesis y otros fenómenos paranormales. 
            Las historias de magia a menudo exploran la capacidad de manipular la realidad y pueden situarse en diversos contextos, desde la alta fantasía hasta el mundo moderno.</p>
    </section>

      </section>
      <a href="index.html">Volver a la página principal</a>
</main>   
`;

const encabezado = document.createElement("header");
const contenidoPrincipal = document.createElement("section");

encabezado.innerHTML = header;
contenidoPrincipal.innerHTML = Generos;

document.body.appendChild(encabezado);
document.body.appendChild(contenidoPrincipal);

// Agregar evento de clic al enlace "Géneros"
const enlaceGeneros = document.querySelector('a[href="generos.html"]');
enlaceGeneros.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    window.location.href = 'generos.html'; // Redirigir a la página de géneros  
});
