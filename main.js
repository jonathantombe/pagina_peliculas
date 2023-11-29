const peliculas = [
  {
    titulo: 'Star Wars ',
    fecha: '2019',
    categoria: 'Ciencia Ficcion',
    sipnosis:
      'Finn y Poe guían a la Resistencia para detener los planes de la Primera Orden para formar un nuevo.',
    trailer: 'https://www.youtube.com/embed/mAGcR6ZqKlQ?si=0lCojQvEBx4PpQVB',
    imagen: 'assets/Images/Movies/1.jpg'
  },
  {
    titulo: 'Storm',
    fecha: '2022',
    categoria: 'Ciencia Ficcion',
    sipnosis:
      'El hijo de Elin muere en un accidente por ahogamiento, pero junto con su hija Storm (10) intenta reiniciar, pero.',
    trailer: 'https://www.youtube.com/embed/xBH25XxM-7g',
    imagen: 'assets/Images/Movies/2.jpg'
  },
  {
    titulo: '1917',
    fecha: '2020',
    categoria: 'Accion',
    sipnosis:
      'Durante la Primera Guerra Mundial, dos jóvenes soldados británicos reciben una orden, aparentemente, imposible de  ',
    trailer: 'https://www.youtube.com/embed/YrbdN5zaouU',
    imagen: 'assets/Images/Movies/3.jpg'
  },
  {
    titulo: 'Los vengadores',
    fecha: '2012',
    categoria: 'Accion',
    sipnosis:
      'Cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial, Nick Fury, director de la.',
    trailer: 'https://www.youtube.com/embed/HQIiYqOVTWo',
    imagen: 'assets/Images/Movies/4.jpg'
  },
  {
    titulo: 'Rampage',
    fecha: '2018',
    categoria: 'Accion',
    sipnosis:
      'Un gorila, un lobo y una serpiente sufren una mutación genética y se convierten en seres gigantescos y.',
    trailer: 'https://www.youtube.com/embed/4NgyVuh3Tcw',
    imagen: 'assets/Images/Movies/5.jpg'
  },
  {
    titulo: 'Oblivion',
    fecha: '2013',
    categoria: 'Ciencia Ficcion',
    sipnosis:
      'Jack Harper y Victoria Olsen son los únicos habitantes de la Tierra, destruida hace sesenta años. Harper, un. ',
    trailer: 'https://www.youtube.com/embed/Pt7TGR8wwdw',
    imagen: 'assets/Images/Movies/6.jpg'
  },
  {
    titulo: 'Hobbit',
    fecha: '2012',
    categoria: 'Ciencia Ficcion',
    sipnosis:
      'La trilogía de El hobbit, adaptación cinematográfica basada en la novela homónima, comprende tres películas.',
    trailer: 'https://www.youtube.com/embed/sI8OQRXhcZE',
    imagen: 'assets/Images/Movies/7.jpg'
  },
  {
    titulo: 'Due date',
    fecha: '2010',
    categoria: 'Comedia',
    sipnosis:
      'Desesperado por llegar a casa para acompañar a su esposa embarazada, un arquitecto viaja desde Atlanta hasta.',
    trailer: 'https://www.youtube.com/embed/1p3NnJ_oiE0',
    imagen: 'assets/Images/Movies/8.jpg'
  },
  {
    titulo: 'Kickc Ass 2',
    fecha: '2010',
    categoria: 'Comedia',
    sipnosis:
      'Dave un estudiante de instituto aficionado a los cómics y que siempre pasa desapercibido, decide un día.',
    trailer: 'https://www.youtube.com/embed/Kt39nS-kJ9U',
    imagen: 'assets/Images/Movies/9.jpg'
  },
  {
    titulo: 'Emoji Movie',
    fecha: '2017',
    categoria: 'Comedia',
    sipnosis:
      'Gene, un emoji con varias expresiones, pide a su amigo Hi-5 y al desencriptador Jailbreak que le ayuden a.',
    trailer: 'https://www.youtube.com/watch?v=7hKwPHRLz58',
    imagen: 'assets/Images/Movies/10.jpg'
  },
  {
    titulo: '¿Qué pasó ayer?',
    fecha: '2009',
    categoria: 'Comedia',
    sipnosis:
      'Una pareja se muda a una mansión para convertirla en un hotel, pero no son conscientes del peligro que .',
    trailer: 'https://www.youtube.com/watch?v=wnNgGp1KVWQ',
    imagen: 'assets/Images/Movies/11.jpg'
  },
  {
    titulo: 'Paths of glory',
    fecha: '1957',
    categoria: 'Accion',
    sipnosis:
      'En la Francia de 1916, el general Boulard ordena la conquista alemana y encarga esa misión al general Mireau.',
    trailer: 'https://www.youtube.com/watch?v=nmDA60X-f_A',
    imagen: 'assets/Images/Movies/12.jpg'
  },
  {
    titulo: 'LEGO Batman:',
    fecha: '2017',
    categoria: 'Ciencia Ficcion',
    sipnosis:
      'El hijo de Elin muere en un accidente por ahogamiento, pero junto con su hija Storm (10) intenta reiniciar, pero.',
    trailer: 'https://www.youtube.com/watch?v=JHxhTOxX_bs',
    imagen: 'assets/Images/Movies/13.jpg'
  },
  {
    titulo: 'Aquaman',
    fecha: '2022',
    categoria: 'Ciencia Ficcion',
    sipnosis:
      'Aquaman debe recuperar el legendario Tridente de Atlan para salvar a la ciudad subacuática de Atlantis.',
    trailer: 'https://www.youtube.com/embed/D3WCrSnCLEM',
    imagen: 'assets/Images/Movies/14.jpg'
  },
  {
    titulo: 'Sonic La Pelicula',
    fecha: '2020',
    categoria: 'Comedia',
    sipnosis:
      'Sonic intenta atravesar las complejidades de la vida en la Tierra con su nuevo mejor amigo, un humano llamado Tom.',
    trailer: 'https://www.youtube.com/watch?v=XPqAai3WBag',
    imagen: 'assets/Images/Movies/15.jpg'
  }
]

const series = [
  {
    titulo: "One piece",
    fecha: "2023",
    categoria: "Comedia",
    sipnosis: "One Piece  es un manga escrito e ilustrado por el mangaka japonés Eiichirō Oda. Comenzó a publicarse en la revista.",
    trailer: "https://www.youtube.com/embed/4k0YKcqWlBI",
    imagen: "assets/Images/Series/1.jpg"
  },
  {
    titulo: "Merlina",
    fecha: "2022",
    categoria: "Comedia",
    sipnosis: "Miércoles llega a su nuevo colegio, Academia de Nunca Jamás, tras ser expulsada de varios centros. Allí se verá.",
    trailer: "https://www.youtube.com/embed/gmp7LTKnVPo",
    imagen: "assets/Images/Series/2.jpg"
  },
  {
    titulo: "juego calamar",
    fecha: "2021",
    categoria: "Accion",
    sipnosis: "Cientos de personas con dificultades económicas aceptan una extraña invitación a un juego de.",
    trailer: "https://www.youtube.com/embed/CF2ekNUwbz8",
    imagen: "assets/Images/Series/3.jpg"
  },
  {
    titulo: "Stranger Things",
    fecha: "2016",
    categoria: "Ciencia Ficcion",
    sipnosis: "Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos.",
    trailer: "https://www.youtube.com/embed/KQoYqvc0QVQ",
    imagen: "assets/Images/Series/4.jpg"
  },
  {
    titulo: "Arcane",
    fecha: "2021",
    categoria: "Ciencia ficcion",
    sipnosis: "Impecable adaptación del mítico videojuego League of Legends (Lol). El argumento se desarrolla en dos.",
    trailer: "https://www.youtube.com/embed/Mj4_xG5NXeo",
    imagen: "assets/Images/Series/5.jpg"
  },
  {
    titulo: "Bloodline",
    fecha: "2015",
    categoria: "comedia",
    sipnosis: "Los secretos de una familia de hermanos adultos son revelados cuando la oveja negra regresa a casa.",
    trailer: "https://www.youtube.com/embed/x7Yq9MJUqjY",
    imagen: "assets/Images/Series/6.jpg"
  },
  {
    titulo: "La Casa De Papel",
    fecha: "2017",
    categoria: "Accion",
    sipnosis: "Una banda organizada de ladrones se propone cometer el atraco del siglo en la Fábrica Nacional de Moneda y.",
    trailer: "https://www.youtube.com/embed/xPKN7MxS8TU",
    imagen: "assets/Images/Series/7.jpg"
  },
  {
    titulo: "Dark",
    fecha: "2017",
    categoria: "Ciencia Ficcion",
    sipnosis: "La historia arranca con la desaparición de un niño en una pequeña localidad alemana, hecho que cambiará.",
    trailer: "https://www.youtube.com/embed/SrPggvIrRBI",
    imagen: "assets/Images/Series/8.jpg"
  },
  {
    titulo: "Wild Wild Country",
    fecha: "2018",
    categoria: "Accion",
    sipnosis: "Un controvertido líder de culto construye una ciudad utópica en el desierto de Oregón. El conflicto con los.",
    trailer: "https://www.youtube.com/embed/3y-6iaveY6c",
    imagen: "assets/Images/Series/9.jpg"
  },
  {
    titulo: "Breaking bad ",
    fecha: "2008",
    categoria: "Comedia",
    sipnosis: "Walter White es un profesor de química de un instituto de Albuquerque. Cuando cumple 50 años es diagnosticado de.",
    trailer: "https://www.youtube.com/embed/IJ_AZCvCacw",
    imagen: "assets/Images/Series/10.jpg"
  },
  {
    titulo: "Vis a vis",
    fecha: "2015",
    categoria: "Comedia",
    sipnosis: "La ficción gira entorno a Macarena, una joven inofensiva que ingresa en la prisión de Cruz del Sur para.",
    trailer: "https://www.youtube.com/embed/hBLS_OM6Puk",
    imagen: "assets/Images/Series/12.jpg"
  },
  {
    titulo: "Peaky Blinders",
    fecha: "2013",
    categoria: "Accion",
    sipnosis: "Gran Bretaña vive la posguerra. Los soldados regresan, se acuñan nuevas revoluciones y nacen bandas.",
    trailer: "https://www.youtube.com/embed/HhesaQXLuRY",
    imagen: "assets/Images/Series/13.jpg"
  },
  {
    titulo: "Narcos",
    fecha: "2015",
    categoria: "Ciencia Ficcion",
    sipnosis: "La historia del ascenso y caída del capo colombiano Pablo Escobar y de los agentes de la DEA que.",
    trailer: "https://www.youtube.com/embed/1AZOY0Xo3m8",
    imagen: "assets/Images/Series/14.jpg"
  },
  {
    titulo: "Monstruo",
    fecha: "2022",
    categoria: "Ciencia Ficcion",
    sipnosis: "La historia de uno de los asesinos en serie más conocidos de Estados Unidos, contada desde los puntos de . ",
    trailer: "https://www.youtube.com/embed/ZHZG6UArE3I",
    imagen: "assets/Images/Series/11.jpg"
  },
  {
    titulo: "The crown",
    fecha: "2021",
    categoria: "Accion",
    sipnosis: "Cientos de personas con dificultades económicas aceptan una extraña invitación a un juego de.",
    trailer: "https://www.youtube.com/embed/xl8zdCY-abw",
    imagen: "assets/Images/Series/15.jpg"
  }
]



const crearCarta = (pelicula) => {
  const element = document.createElement('div') 

  element.addEventListener("click", () => {
    console.log('teste');
    const modalElemento = document.querySelector(".modal");
    modalElemento.classList.add("open");


    const reproductorElemento = document.querySelector(".reproductor");
    reproductorElemento.src = pelicula.trailer;

  });


  const img = document.createElement('img')
  img.src = pelicula.imagen

  const titulo = document.createElement('h2')
  titulo.textContent = pelicula.titulo

  const estrenoTitulo = document.createElement('p')
  estrenoTitulo.textContent = 'Estreno: ' + pelicula.fecha
  const estreno = document.createElement('p')
  estreno.textContent = pelicula.sipnosis

  const trailerTitulo = document.createElement('p')
  trailerTitulo.textContent = 'Genero: ' + pelicula.categoria

  const trailer = document.createElement('a')
  trailer.setAttribute('target', '_blank')
  trailer.classList.add('trailer')
  trailer.textContent = 'VER TRAILER'
  trailer.href = pelicula.trailer

  element.appendChild(img)
  element.appendChild(titulo)
  element.appendChild(estrenoTitulo)
  element.appendChild(estreno)
  element.appendChild(trailerTitulo)
  element.appendChild(trailer)
  element.classList.add('movie-serie')
  return element
}

const mostrarPeliculas = () => {
  const moviesContenedor = document.querySelector('.section-movies')
  
  peliculas.forEach((pelicula) => {
    moviesContenedor.appendChild(crearCarta(pelicula))
  
  })
}

const mostrarSeries = () => {
  const moviesContenedor = document.querySelector('.section-series')
  
  series.forEach((serie) => {
    moviesContenedor.appendChild(crearCarta(serie))
    
  })
}


const buscarPeliculas = (texto) => {
  const moviesContenedor = document.querySelector('.section-movies')
  const peliculasFiltradas = peliculas.filter((pelicula) => {
    return (
      pelicula.titulo.toLowerCase().includes(texto) ||
      pelicula.categoria.toLowerCase().includes(texto)
    )
  })
  moviesContenedor.innerHTML = ''

  if (peliculasFiltradas.length) {
    peliculasFiltradas.forEach((pelicula) => {
      moviesContenedor.appendChild(crearCarta(pelicula))
    })
  } else {
    const elemento = document.createElement('p')
    elemento.textContent = 'No se encontraron resultados'
    moviesContenedor.appendChild(elemento)
  }
}


const filtrarPorCategoria = (categoria) => {
  const peliculasFiltradas = peliculas.filter(p => p.categoria === categoria);
  const seriesFiltradas = series.filter(s => s.categoria === categoria);

  const moviesContenedor = document.querySelector('.section-movies');
  moviesContenedor.innerHTML = '';
  peliculasFiltradas.forEach(p => {
    moviesContenedor.appendChild(crearCarta(p));
  });

  const seriesContenedor = document.querySelector('.section-series');
  seriesContenedor.innerHTML = '';
  seriesFiltradas.forEach(s => {
    seriesContenedor.appendChild(crearCarta(s));
  });
};


const filtroCategoria = document.querySelector('#filtroCategoria');

filtroCategoria.addEventListener('change', () => {
  const categoria = filtroCategoria.value;
  filtrarPorCategoria(categoria);
  if (filtroCategoria.value === 'series') {
    filtrarPorSeries();
  }

  if (filtroCategoria.value === 'peliculas') {
    filtrarPorPeliculas();
  }
  if (filtroCategoria.value === 'todos') {
    mostrarPeliculas();
    mostrarSeries();
    return;
  } 
 
})

const buscarSeries = (texto) => {
  const seriesContenedor = document.querySelector('.section-series')
  const seriesFiltradas = series.filter((serie) => {
    return (
      serie.titulo.toLowerCase().includes(texto) ||
      serie.categoria.toLowerCase().includes(texto)
    )
  })
  seriesContenedor.innerHTML = ''

  if (seriesFiltradas.length) {
    seriesFiltradas.forEach((serie) => {
      seriesContenedor.appendChild(crearCarta(serie))
    })
  } else {
    const elemento = document.createElement('p')
    elemento.textContent = 'No se encontraron resultados'
    seriesContenedor.appendChild(elemento)
  }
}

const buscador = document.querySelector('#buscador')
buscador.addEventListener('keyup', (e) => {
  const texto = e.target.value.toLowerCase()
  buscarPeliculas(texto)
  buscarSeries(texto)
})


const cerrarModalelemento = document.querySelector(".cerrar-modal");
cerrarModalelemento.addEventListener("click", () => {
  const modalElemento = document.querySelector(".modal");
  modalElemento.classList.remove("open");
});
mostrarPeliculas();
mostrarSeries();

