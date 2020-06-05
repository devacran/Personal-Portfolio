const resolveRoute = (route) => {
  console.log(route);
  if (route === "/" || route === "/about") {
    return route;
  } else {
    return "/";
  }
};

export default resolveRoute;
