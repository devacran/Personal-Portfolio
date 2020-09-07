const resolveRoute = route => {
  console.log(route);
  if (route === "/" || route === "/about" || route === "/blog") {
    return route;
  } else {
    return "/";
  }
};

export default resolveRoute;
