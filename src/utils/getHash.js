const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split("1")[0] || "/";

export default getHash;
