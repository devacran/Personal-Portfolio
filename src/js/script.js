import Glide from "@glidejs/glide";
function script() {
  const isMobile = window.innerWidth < 720;
  const $menu = document.getElementById("menu");
  const $navbarMenu = document.getElementById("navbar-menu");
  const $sections = document.querySelectorAll("section");
  const $aboutTitle = document.getElementById("about");
  const $navbarSide = document.querySelector(".navbar--side");
  const $portafolio = document.getElementById("projects");
  const $hero = document.getElementById("hero");
  const $myPhoto = document.getElementById("myPhoto");

  function toggleMenu() {
    const menuWidth = parseInt($navbarSide.offsetWidth);
    if ($menu.getAttribute("toggle") === "false") {
      Array.prototype.forEach.call($sections, section => {
        section.style.transition = "0.5s";
        section.style.transform = `translateX(-${menuWidth}px)`;
      });
      if ($aboutTitle) {
        const aboutTitleHeight = $aboutTitle.offsetHeight + 25;
        $aboutTitle.style.transition = "0.5s";
        $aboutTitle.style.transform = `rotateZ(-90deg) translate(0px, -${5}px)`;
      }
      $menu.setAttribute("toggle", "true");
      $navbarSide.style.zIndex = 0;
    } else {
      Array.prototype.forEach.call($sections, section => {
        section.style.transform = "translateX(0)";
      });
      if ($aboutTitle) {
        $aboutTitle.style.transform = `rotateZ(-90deg) translate(0px,0px)`;
        $navbarSide.style.zIndex = -1;
      }
      $menu.setAttribute("toggle", "false");
    }
  }
  $menu.addEventListener("click", toggleMenu);

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entrie => {
        entrie.isIntersecting
          ? $hero.classList.add("fadeOut")
          : $hero.classList.remove("fadeOut");
      });
    },
    { threshold: [0.1, 0.8] }
  );

  let s;
  const toggleNavbar = navbar => {
    const close = () => navbar.classList.remove("navbar--show");
    const open = () => navbar.classList.add("navbar--show");
    s < window.scrollY ? close() : open();
    s = window.scrollY;
  };
  window.addEventListener("scroll", () => toggleNavbar($navbarMenu));
  let size, scroll;

  const zoomInOut = image => {
    if (!image) return;
    const getRefSize = () => {
      size = window.getComputedStyle(image, null).transform;
      size = size.match(/\d+.\d+/)[0];
      return parseInt(size);
    };
    if (!size) {
      let size = getRefSize(image);
    }
    const newScale = size - window.scrollY / 1000;
    image.style.transform = `matrix(${newScale}, 0, 0, ${newScale}, 0, 0)`;
  };
  isMobile && window.addEventListener("scroll", () => zoomInOut($myPhoto));
  new Glide(".glide").mount();
}
export default script;
