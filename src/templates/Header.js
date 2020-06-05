const Header = () => {
  const view = `
  <nav>
    <div class="navbar">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li>Blog</li>
      </ul>
      <ul>
        <li><a href="direccion">Proyectos</a></li>
        <li><a href="direccion">Contacto</a></li>
        <li><a href="direccion">Idioma</a></li>
        <li><a href="#/about">Acerca de mi</a></li>
      </ul>
      <ul class="navbar__menu-btn">
        <li> <a>Idioma </a><a id="menu" toggle="false">Menu</a></li>
      </ul>
    </div>
  </nav>
  <nav class="navbar navbar--side">
    <ul>
      <li><a href="direccion">Proyectos</a></li>
      <li><a href="direccion">Contacto</a></li>
      <li><a href="direccion">Idioma</a></li>
      <li><a href="https://devacran.github.io/Personal-Portfolio/about.html">Acerca de mi</a></li>
    </ul>
  </nav>
  `;
  return view;
};

export default Header;
