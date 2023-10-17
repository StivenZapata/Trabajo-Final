
export const header = 
`
<h1>Animes Populares</h1>

`;
export const AnimesPopulares  =
` 
<main>
        <section class="contenido-animes-populares">
            <article>
                <h2>One Piece</h2>
                <p>One Piece es una serie de manga y anime escrita e ilustrada por Eiichiro Oda. Sigue las aventuras de Monkey D. Luffy y su tripulación en busca del tesoro más grande del mundo, el One Piece.</p>
            </article>

            <article>
                <h2>Naruto</h2>
                <p>Naruto es una serie de manga y anime creada por Masashi Kishimoto. Narra la historia de Naruto Uzumaki, un joven ninja que busca el reconocimiento de sus compañeros y sueña con convertirse en el Hokage, el líder de su aldea.</p>
            </article>

            <article>
                <h2>Dragon Ball</h2>
                <p>Dragon Ball es una serie de anime y manga creada por Akira Toriyama. Sigue las aventuras de Goku desde su infancia hasta su edad adulta mientras explora el mundo en busca de las esferas del dragón.</p>
            </article>
    
            <article>
                <h2>Attack on Titan</h2>
                <p>Attack on Titan (Shingeki no Kyojin) es una serie de manga y anime creada por Hajime Isayama. La historia se desarrolla en un mundo donde la humanidad está al borde de la extinción debido a gigantes humanoides conocidos como titanes.</p>
            </article>
    
            <article>
                <h2>My Hero Academia</h2>
                <p>My Hero Academia (Boku no Hero Academia) es una serie de manga y anime escrita e ilustrada por Kohei Horikoshi. La historia sigue a Izuku Midoriya, un joven sin superpoderes en un mundo donde la mayoría de las personas los tienen, pero aún sueña con convertirse en un héroe.</p>
            </article>
            
            <article>
                <h2>Death Note</h2>
                <p>Death Note es una serie de manga y anime escrita por Tsugumi Ohba e ilustrada por Takeshi Obata. La historia sigue a un estudiante de secundaria que encuentra un cuaderno capaz de matar a cualquier persona cuyo nombre sea escrito en él.</p>
            </article>
    
            <article>
                <h2>Fullmetal Alchemist: Brotherhood</h2>
                <p>Fullmetal Alchemist: Brotherhood es una serie de anime basada en el manga de Hiromu Arakawa. Sigue las aventuras de dos hermanos alquimistas que buscan la Piedra Filosofal para restaurar sus cuerpos después de un intento de alquimia fallido.</p>
            </article>
    
            <article>
                <h2>One Punch Man</h2>
                <p>One Punch Man es una serie de manga y anime creada por el artista ONE. La historia sigue a Saitama, un superhéroe tan poderoso que puede derrotar a cualquier enemigo de un solo golpe, lo que lo deja sin desafíos emocionantes.</p>
            </article>
    
            <article>
                <h2>Tokyo Ghoul</h2>
                <p>Tokyo Ghoul es una serie de manga y anime escrita e ilustrada por Sui Ishida. La trama sigue a Kaneki, un joven que se convierte en un ghoul después de un encuentro con uno, y su lucha por adaptarse a su nueva vida como un ser mitad humano, mitad ghoul.</p>
            </article>
    
            <article>
                <h2>Demon Slayer: Kimetsu no Yaiba</h2>
                <p>Demon Slayer: Kimetsu no Yaiba es una serie de manga y anime escrita por Koyoharu Gotouge. La historia sigue a Tanjiro Kamado, un joven que se convierte en cazador de demonios después de que su familia es asesinada por demonios y su hermana Nezuko es convertida en uno de ellos.</p>
            </article>

        </section>
        <a href="index.html">Volver a la página principal</a
      
 </main>   
`;

const encabezado = document.createElement("header");
const contenidoPrincipal = document.createElement("section");

encabezado.innerHTML = header;
contenidoPrincipal.innerHTML = AnimesPopulares;

document.body.appendChild(encabezado);
document.body.appendChild(contenidoPrincipal);

// Agregar evento de clic al enlace "Animes Populares"
const enlaceAnimesPopulares = document.querySelector('a[href="animes-populares.html"]');
enlaceAnimesPopulares.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    window.location.href = 'animes-populares.html'; // Redirigir a la página de Animes Populares
});