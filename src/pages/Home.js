const Home = () => {
  const view = `
  <main>
    <section class="main-section">
      <div class="hero">
        <div class="hero__container">
          <div class="right-border expandHeight"></div><span>
            <p>HELLO! <br><b>I'M MIGUEL DE LA ROSA</b> <br> WEB DEVELOPER</p><span>
              <p>Apasionated about technology and music</p></span></span>
        </div>
      </div>
    </section>
  </main>
  <section class="portfolio">
    <div class="section-title section-title--dark">Featured Work</div>
    <div class="portfolio__proyect-title"><span>
        <button class="portfolio__button" id="backward"><img src="./src/images/backwards.png"></button></span><span>Platzi Video</span><span>
        <button class="portfolio__button" id="forward"><img src="./src/images/forwards.png"></button></span></div>
    <div class="carousel">
      <div class="carousel__container">
        <div class="carousel__overlay"></div>
        <div class="carousel__strip carousel__strip-small" id="carouselSmall">
          <div><a href="direccion"><img src="src/images/blog1.jpg" alt="Hola"/></a></div>
          <div><a href="direccion"><img src="src/images/blog2.jpg" alt="Hola"/></a></div>
          <div><a href="direccion"><img src="src/images/blog1.jpg" alt="Hola"/></a></div>
          <div><a href="direccion"><img src="src/images/blog2.jpg" alt="Hola"/></a></div>
        </div>
      </div>
      <div class="carousel__central">
        <div class="carousel__strip" id="carouselBig">
          <div><a href="direccion"><img src="src/images/blog1.jpg" alt="Hola"/></a></div>
          <div><a href="direccion"><img src="src/images/blog2.jpg" alt="Hola"/></a></div>
          <div><a href="direccion"><img src="src/images/blog1.jpg" alt="Hola"/></a></div>
          <div><a href="direccion"><img src="src/images/blog2.jpg" alt="Hola"/></a></div>
        </div>
      </div>
    </div>
    <div class="portfolio__project-description"><span>Proyecto hecho con stylus, HTML y CSS</span></div>
  </section>
  <section class="skills">
    <div class="section-title">Relevant Skills</div>
    <div class="section-subtitle"><span> </span><span>WEB DEVELOP</span><span>I work with the best tecnologies</span></div>
    <div class="skills__icons"><span><img src="src/images/angular.png"></span><span><img src="src/images/angular.png"></span><span><img src="src/images/angular.png"></span><span><img src="src/images/angular.png"></span><span><img src="src/images/angular.png"></span><span><img src="src/images/angular.png"></span><span><img src="src/images/angular.png"></span><span><img src="src/images/angular.png"></span></div>
  </section>
  `;
  return view;
};

export default Home;
