const searchInput = document.getElementById("search-input");
const characterList = document.getElementById("character-list");
const characterDetails = document.getElementById("character-details");

// Function to display character details
function displayCharacterDetails(character) {
  const {
    name,
    alternate_names,
    gender,
    house,
    dateOfBirth,
    wizard,
    ancestry,
    eyeColour,
    hairColour,
    wand,
    patronus,
    hogwartsStudent,
    hogwartsStaff,
    actor,
    alive,
    image
  } = character;

  const html = `
    <h2>${name}</h2>
    <p><strong>Alternate Names:</strong> ${alternate_names.join(", ")}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>House:</strong> ${house}</p>
    <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
    <p><strong>Wizard:</strong> ${wizard ? "Yes" : "No"}</p>
    <p><strong>Ancestry:</strong> ${ancestry}</p>
    <p><strong>Eye Colour:</strong> ${eyeColour}</p>
    <p><strong>Hair Colour:</strong> ${hairColour}</p>
    <p><strong>Wand:</strong> ${wand.wood} wood with a ${wand.core} core, ${wand.length} inches in length</p>
    <p><strong>Patronus:</strong> ${patronus}</p>
    <p><strong>Hogwarts Student:</strong> ${hogwartsStudent ? "Yes" : "No"}</p>
    <p><strong>Hogwarts Staff:</strong> ${hogwartsStaff ? "Yes" : "No"}</p>
    <p><strong>Actor:</strong> ${actor}</p>
    <p><strong>Alive:</strong> ${alive ? "Yes" : "No"}</p>
    <img src="${image}" alt="${name} Image">
  `;

  characterDetails.innerHTML = html;
  characterList.style.display = "none";
  characterDetails.style.display = "block";
  window.scrollTo(0, 0);
}

// Function to handle search input and fetch characters
function handleSearchInput() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm)
  );

  characterList.innerHTML = "";

  filteredCharacters.forEach(character => {
    const listItem = document.createElement("li");
    listItem.innerText = character.name;
    listItem.addEventListener("click", () => displayCharacterDetails(character));
    characterList.appendChild(listItem);
  });

  if (filteredCharacters.length === 0) {
    characterDetails.innerHTML = "<p>No matching characters found.</p>";
    characterDetails.style.display = "none";
    characterList.style.display = "block";
  }
}

// Fetch characters from the API
let characters = [];

fetch("https://hp-api.onrender.com/api/characters")
  .then(response => response.json())
  .then(data => {
    characters = data;
  })
  .catch(error => console.log("Error occurred while fetching character data:", error));

// Event listener for search input
searchInput.addEventListener("input", handleSearchInput);

function handleSearchInput() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm)
    );
  
    characterList.innerHTML = "";
  
    filteredCharacters.forEach(character => {
      const listItem = document.createElement("li");
      listItem.innerText = character.name;
      listItem.addEventListener("click", () => displayCharacterDetails(character));
      characterList.appendChild(listItem);
    });
  
    if (filteredCharacters.length === 0) {
      characterDetails.innerHTML = "<p>No matching characters found.</p>";
      characterDetails.style.display = "none";
      characterList.style.display = "block";
    } else {
      characterDetails.innerHTML = "";
      characterDetails.style.display = "none";
      characterList.style.display = "block";
    }
  }
