export const loadBooks = async (searchText) => {
  var url = "http://localhost:9090/books";
  if (searchText) {
    url = `${url}?search=${searchText}`
  }
  const response = await fetch(url);
  return response.json();
};
