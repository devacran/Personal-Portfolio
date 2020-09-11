import Header from "../templates/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

import getHash from "../utils/getHash";
import resolveRoute from "../utils/resolveRoute";

const routes = {
  "/": Home,
  "/about": About,
  "/resources": NotFound
};

const router = async () => {
  const $header = null || document.getElementById("Header");
  const $app = null || document.getElementById("App");

  $header.innerHTML = await Header();

  let hash = await getHash();
  let route = await resolveRoute(hash);
  let render = routes[route] ? routes[route] : "Error 404";

  $app.innerHTML = await render();
};

export default router;
