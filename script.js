let currentClass;
let currentClassIndex = 0;

const UI = {
    characterClass: document.querySelector(".characterClass"),
    newCharacterButton: document.querySelector(".newCharacterButton")
};

UI.newCharacterButton.addEventListener("click", () => {
    getGameCharacterClass();
});

function getGameCharacterClass() {
    fetch("https://www.dnd5eapi.co/api/classes").then((response) => {
        console.log("Dnd Character Classes", response);

        response.json().then((data) => {


            currentClass = data;

            renderCharacter(data.results[currentClassIndex]);

            currentClassIndex++;
        });
    });
}


function renderCharacter(singleClass) {
    if (singleClass === undefined)
        return;

    UI.characterClass.innerHTML = singleClass.name;
}