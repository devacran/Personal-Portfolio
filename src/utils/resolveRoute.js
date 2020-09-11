const resolveRoute = route => {
  if (route === "/" || route === "/about" || route === "/resources") {
    return route;
  } else {
    return "/";
  }
};

export default resolveRoute;
