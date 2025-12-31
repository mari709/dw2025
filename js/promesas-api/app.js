/* function fetchData() {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json 
    ())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
} */

    async function fetchData() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();