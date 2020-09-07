import Header from "../templates/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";

import getHash from "../utils/getHash";
import resolveRoute from "../utils/resolveRoute";

const routes = {
  "/": Home,
  "/about": About,
  "/blog": Blog
};

const router = async () => {
  const $header = null || document.getElementById("Header");
  const $app = null || document.getElementById("App");

  $header.innerHTML = await Header();
  // $footer.innerHTML = await Footer();

  let hash = await getHash();
  let route = await resolveRoute(hash);
  let render = routes[route] ? routes[route] : "Error 404";

  $app.innerHTML = await render();
};

export default router;
